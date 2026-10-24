import { createI18n } from 'vue-i18n'
import axios from 'axios'
import fr from './fr'
import en from './en'
import ar from './ar'

// Get saved locale from localStorage or use 'fr' as default
const savedLocale = localStorage.getItem('locale') || 'fr'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'fr',
  messages: {
    fr,
    en,
    ar
  }
})

// Helper to flatten nested object
function flattenObject(obj, prefix = '', res = {}) {
  for (const key in obj) {
    const propName = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenObject(obj[key], propName, res);
    } else if (Array.isArray(obj[key])) {
      // Flatten arrays specifically
      obj[key].forEach((item, index) => {
        flattenObject(item, `${propName}.${index}`, res);
      });
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}

// Helper to unflatten back to nested object
function unflattenObject(flat) {
  const result = {};
  for (const key in flat) {
    const parts = key.split('.');
    let current = result;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const nextPart = parts[i + 1];
      const isNextNumber = nextPart !== undefined && !isNaN(nextPart);

      if (i === parts.length - 1) {
        current[part] = flat[key];
      } else {
        if (!current[part]) {
          current[part] = isNextNumber ? [] : {};
        }
        current = current[part];
      }
    }
  }
  return result;
}

// Dynamic translation function using LibreTranslate
export async function loadLibreTranslate(targetLang) {
  if (targetLang === 'fr') return;

  const cacheKey = `libretranslate_cache_${targetLang}`;
  const cached = localStorage.getItem(cacheKey);

  // If cached, load it immediately
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      const existing = i18n.global.getLocaleMessage(targetLang) || {};
      i18n.global.setLocaleMessage(targetLang, { ...existing, ...parsed });
      console.log(`[LibreTranslate] Loaded cached translations for ${targetLang}`);
      return;
    } catch (e) {
      console.error('[LibreTranslate] Failed to parse cache', e);
    }
  }

  // Otherwise translate the French bundle
  const apiUrl = localStorage.getItem('libretranslate_api_url') || 'https://translate.argosopentech.com/translate';
  console.log(`[LibreTranslate] Translating fr to ${targetLang} using ${apiUrl}...`);

  const flatFr = flattenObject(fr);
  const keys = Object.keys(flatFr);
  const values = Object.values(flatFr);

  try {
    const response = await axios.post(apiUrl, {
      q: values,
      source: 'fr',
      target: targetLang,
      format: 'text'
    });

    const translatedValues = response.data.translatedText;
    if (!translatedValues || translatedValues.length !== values.length) {
      throw new Error('Invalid translation response');
    }

    const translatedFlat = {};
    keys.forEach((key, index) => {
      translatedFlat[key] = translatedValues[index];
    });

    const translatedObj = unflattenObject(translatedFlat);
    
    // Save to cache
    localStorage.setItem(cacheKey, JSON.stringify(translatedObj));

    // Merge and set in i18n
    const existing = i18n.global.getLocaleMessage(targetLang) || {};
    i18n.global.setLocaleMessage(targetLang, { ...existing, ...translatedObj });
    console.log(`[LibreTranslate] Successfully translated and loaded ${targetLang}`);
  } catch (error) {
    console.error(`[LibreTranslate] Error translating to ${targetLang}:`, error);
  }
}

// Trigger initial translation if target language is not fr
if (savedLocale !== 'fr') {
  loadLibreTranslate(savedLocale);
}

export default i18n

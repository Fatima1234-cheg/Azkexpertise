import { createI18n } from 'vue-i18n'
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

export default i18n

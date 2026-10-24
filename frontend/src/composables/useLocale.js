import { useI18n } from 'vue-i18n'

export function useAppLocale() {
  const { locale } = useI18n()

  const changeLocale = (newLocale) => {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
  }

  return {
    locale,
    changeLocale
  }
}

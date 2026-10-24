<template>
  <div id="app" :dir="isRtl ? 'rtl' : 'ltr'" :lang="locale">
    <router-view />
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { loadLibreTranslate } from './i18n'

const { locale } = useI18n()
const isRtl = computed(() => locale.value === 'ar')

watch(locale, (newLocale) => {
  document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = newLocale
  localStorage.setItem('locale', newLocale)
  loadLibreTranslate(newLocale)
}, { immediate: true })
</script>

<style>
/* Reset global (complément) */
body {
  margin: 0;
  padding: 0;
}
</style>
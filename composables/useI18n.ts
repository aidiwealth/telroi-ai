// composables/useI18n.ts
// Lightweight translation system. Uses a single shared reactive locale
// state across the app. Persists to localStorage so refreshes keep the choice.

import { ref, computed } from 'vue';
import { translations, type Lang } from '~/utils/translations';

const LANG_STORAGE_KEY = 'telroi-lang';

// Shared reactive state (module-scoped so it's a singleton)
const currentLang = ref<Lang>('en-US');

// Hydrate from localStorage on the client
if (process.client && typeof window !== 'undefined') {
  const saved = window.localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
  if (saved && saved in translations) {
    currentLang.value = saved;
  }
}

export function useI18n() {
  function t(key: string): string {
    const dict = translations[currentLang.value] ?? translations['en-US'];
    return dict[key] ?? translations['en-US'][key] ?? key;
  }

  function setLang(lang: Lang) {
    currentLang.value = lang;
    if (process.client) {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
      document.documentElement.setAttribute('lang', lang);
    }
  }

  const langLabel = computed(() => {
    const map: Record<Lang, string> = {
      'en-US': 'United States <b>(English)</b>',
      'en-GB': 'United Kingdom <b>(English)</b>',
      'es-ES': 'España <b>(Español)</b>',
      'fr-FR': 'France <b>(Français)</b>'
    };
    return map[currentLang.value];
  });

  return {
    t,
    setLang,
    currentLang: computed(() => currentLang.value),
    langLabel
  };
}

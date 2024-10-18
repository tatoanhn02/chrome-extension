import i18next from 'i18next';

import en from './langs/en.json';
import vi from './langs/vi.json';

i18next.init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  lng: 'vi',
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
});

export default i18next;

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import enNs from '../../../../public/locales/en/translation.json';
import ruNs from '../../../../public/locales/ru/translation.json';

export const translations = {
  en: {
    translation: enNs,
  },
  ru: {
    translation: ruNs,
  },
};

export const defaultNS = 'translation';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    // debug: __IS_DEV__,
    debug: false,
    resources: translations,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;

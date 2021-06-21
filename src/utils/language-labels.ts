import { defineMessages } from 'react-intl';

export const languageLabels = defineMessages({
  en: {
    defaultMessage: 'English',
  },
  es: {
    defaultMessage: 'Spanish',
  },
  fr: {
    defaultMessage: 'French',
  },
  cat: {
    defaultMessage: 'Catalan',
  },
  pl: {
    defaultMessage: 'Polish',
  },
});

export type LanguageLabelKey = keyof typeof languageLabels;

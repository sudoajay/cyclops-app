export interface Configs {
  name: string;
  maxWidth: number;
}

export const Configs: Configs = {
  name: 'Cyclops',
  maxWidth: 500,
};

export const SupportedLanguages = {
  en: {
    name: 'english',
    source: 'english',
    dir: 'ltr',
  },
  hi: {
    name: 'hindi',
    source: 'हिन्दी',
    dir: 'ltr',
  },
  ar: {
    name: 'arabic',
    source: 'العربية',
    dir: 'rtl',
  },
  de: {
    name: 'german',
    source: 'deutsch',
    dir: 'ltr',
  },
  es: {
    name: 'spanish',
    source: 'español',
    dir: 'ltr',
  },
  fa: {
    name: 'persian',
    source: 'فارسی',
    dir: 'rtl',
  },
  fr: {
    name: 'french',
    source: 'français',
    dir: 'ltr',
  },
  pt: {
    name: 'portuguese',
    source: 'português',
    dir: 'ltr',
  },
  id: {
    name: 'indonesian',
    source: 'indonesian',
    dir: 'ltr',
  },
  it: {
    name: 'italian',
    source: 'italiano',
    dir: 'ltr',
  },
  ja: {
    name: 'japanese',
    source: '日本語',
    dir: 'ltr',
  },
  ko: {
    name: 'korean',
    source: '한국어',
    dir: 'ltr',
  },
  nl: {
    name: 'nederlands',
    source: 'dutch',
    dir: 'ltr',
  },
  ru: {
    name: 'russian',
    source: 'русский',
    dir: 'ltr',
  },
  th: {
    name: 'thai',
    source: 'ไทย',
    dir: 'ltr',
  },
  tr: {
    name: 'turkish',
    source: 'Türk',
    dir: 'ltr',
  },
  ur: {
    name: 'urdu',
    source: 'اردو',
    dir: 'rtl',
  },
  vi: {
    name: 'vietnamese',
    source: 'Tiếng Việt',
    dir: 'ltr',
  },
  zh: {
    name: 'chinese',
    source: '中文',
    dir: 'ltr',
  },
};

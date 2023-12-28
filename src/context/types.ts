// Define translation type
export type Translation = {
  [key: string]: string;
};

// Define translations object with different languages
export type Translations = {
  [key: string]: Translation;
};

// Define context type
export type LocalizationContextType = {
  language: string;
  translations: Translation;
  changeLanguage: (newLanguage: string) => void;
};

export const LocalizationDefault: LocalizationContextType = {
  language: 'en',
  translations: {
    en: 'En',
  },
  changeLanguage: (newLanguage: string) => console.log(newLanguage),
};

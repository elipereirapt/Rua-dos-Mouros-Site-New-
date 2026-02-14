export type Language = 'en' | 'fr' | 'pt';

export interface ContentSection {
  title: string;
  subtitle?: string;
  description: string[]; // Array for paragraphs
  features?: string[];
}

export interface Specification {
  label: string;
  value: string;
}

export interface Translation {
  nav: {
    location: string;
    residence: string;
    garden: string;
    investment: string;
    contact: string;
    bookViewing: string;
  };
  hero: {
    headline: string;
    subhead: string;
    cta: string;
  };
  location: ContentSection;
  residence: ContentSection & {
    specs: Specification[];
  };
  garden: ContentSection;
  investment: ContentSection & {
    price: string;
    priceLabel: string;
  };
  contact: {
    title: string;
    text: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    whatsapp: string;
    downloadFloorPlan: string;
  };
  footer: {
    disclaimer: string;
    rights: string;
  };
}

export interface SiteContent {
  en: Translation;
  fr: Translation;
  pt: Translation;
}
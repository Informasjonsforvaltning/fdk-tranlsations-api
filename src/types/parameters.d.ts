import type { Language, Document } from './enums';

export interface GetTranslationsParams {
  document: Document;
  language: Language;
}

export interface GetTextDirectionParams {
  language: Language;
}

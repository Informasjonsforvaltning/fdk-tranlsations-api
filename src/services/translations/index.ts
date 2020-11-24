import logger, { serviceTags } from '@fellesdatakatalog/graphql/lib/logging';
import {
  NotFoundError,
  PersistenceError
} from '@fellesdatakatalog/graphql/lib/errors';
import type { RequestOptions } from '@fellesdatakatalog/graphql/lib/types';

import type { TranslationsDocument } from '../../types';
import { Document, Language, TextDirection } from '../../types/enums';

import documents from './translations';
import textDirections from './text-directions';

const tags: string[] = [...serviceTags, 'translations'];

class TranslationsService {
  public async getTranslations(
    document: Document,
    language: Language,
    options?: RequestOptions
  ): Promise<TranslationsDocument> {
    try {
      const translations = documents?.[document]?.[language] ?? {};

      logger.info(
        `Found translations for document: ${document} in language ${language}`,
        {
          tags: [...tags, 'success'],
          ...options
        }
      );

      return translations;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  public async getTextDirection(
    language: Language,
    options?: RequestOptions
  ): Promise<TextDirection> {
    try {
      const textDirection = textDirections[language];

      logger.info(`Found text direction for language ${language}`, {
        tags: [...tags, 'success'],
        ...options
      });

      return textDirection;
    } catch (error) {
      throw this.handleError(error, options);
    }
  }

  private handleError(error: Error, options?: RequestOptions): Error {
    logger.error(error.message, {
      tags: [...tags, 'error'],
      ...options,
      error
    });

    if (error instanceof NotFoundError) {
      return error;
    } else {
      return new PersistenceError(
        'An error occurred whilst working with Translations model'
      );
    }
  }
}

export default new TranslationsService();

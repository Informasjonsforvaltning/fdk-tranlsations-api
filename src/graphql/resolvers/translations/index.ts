import {
  Operation,
  RequestOptions
} from '@fellesdatakatalog/graphql/lib/types';

import TranslationsService from '../../../services/translations';

import type { TranslationsOperations } from '../../../types';

export const queries: TranslationsOperations[Operation.QUERY] = {
  getTranslations: async ({
    info: { fieldName },
    context: { requestId },
    input: { document, language }
  }) => {
    const options: RequestOptions = {
      requestId,
      fieldName
    };

    return TranslationsService.getTranslations(document, language, options);
  },
  getTextDirection: async ({
    info: { fieldName },
    context: { requestId },
    input: { language }
  }) => {
    const options: RequestOptions = {
      requestId,
      fieldName
    };

    return TranslationsService.getTextDirection(language, options);
  }
};

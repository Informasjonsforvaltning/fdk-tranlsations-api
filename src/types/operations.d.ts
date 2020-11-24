import type { Operation, Resolver } from '@fellesdatakatalog/graphql/lib/types';

import type {
  GetTranslationsParams,
  GetTextDirectionParams,
  TranslationsDocument
} from '.';

export interface TranslationsOperations {
  [Operation.QUERY]: {
    getTranslations: Resolver<GetTranslationsParams, TranslationsDocument>;
    getTextDirection: Resolver<GetTextDirectionParams, TextDirection>;
  };
}

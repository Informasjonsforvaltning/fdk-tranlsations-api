import { GraphQLJSONObject as JSONObject } from 'graphql-type-json';
import { createRootResolver } from '@fellesdatakatalog/graphql/lib/utils';

import { queries as TranslationsQueries } from './translations';

export default {
  ...createRootResolver({ ...TranslationsQueries }, {}),
  JSONObject
};

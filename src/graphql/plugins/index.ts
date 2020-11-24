import {
  RequestLogger,
  ErrorHandler
} from '@fellesdatakatalog/graphql/lib/plugins';

import ServerConfiguration from './server-configuration';

export default [ServerConfiguration, RequestLogger, ErrorHandler];

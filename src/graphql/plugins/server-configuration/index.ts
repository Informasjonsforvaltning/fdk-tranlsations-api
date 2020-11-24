import type { ApolloServerPlugin } from 'apollo-server-plugin-base';
import logger, {
  serverConfigTags
} from '@fellesdatakatalog/graphql/lib/logging';
import type { Context } from '@fellesdatakatalog/graphql/lib/types';

import env from '../../../env';

const {
  NODE_ENV: environment,
  INTROSPECTION: introspection,
  PLAYGROUND: playground
} = env;

const plugin: ApolloServerPlugin<Context> = {
  serverWillStart: () => {
    logger.info(
      `Introspection query is ${
        introspection ? 'enabled' : 'disabled'
      } in ${environment} mode`,
      {
        tags: [...serverConfigTags, 'introspection']
      }
    );
    logger.info(
      `GraphQL Playground is ${
        playground ? 'enabled' : 'disabled'
      } in ${environment} mode`,
      {
        tags: [...serverConfigTags, 'playground']
      }
    );
  }
};

export default plugin;

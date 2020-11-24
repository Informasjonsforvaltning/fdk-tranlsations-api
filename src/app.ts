import logger, { serverTags } from '@fellesdatakatalog/graphql/lib/logging';

import server from './server';

import env from './env';

const { NODE_ENV: environment, HOST: host, PORT: port } = env;

async function main() {
  server.listen({ host, port }).then(({ url }) =>
    logger.info(`Application is running at ${url} in ${environment} mode`, {
      tags: [...serverTags, 'start']
    })
  );
}

main();

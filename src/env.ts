import { Environment } from '@fellesdatakatalog/graphql/lib/types';
import { validateEnv } from '@fellesdatakatalog/graphql/lib/utils';

const {
  NODE_ENV = Environment.DEVELOPMENT,
  HOST = '0.0.0.0',
  PORT = 8080,
  PLAYGROUND = true,
  INTROSPECTION = true
} = process.env;

export default validateEnv({
  NODE_ENV:
    NODE_ENV === Environment.DEVELOPMENT
      ? Environment.DEVELOPMENT
      : Environment.PRODUCTION,
  HOST,
  PORT: Number(PORT),
  PLAYGROUND: ['true', true].includes(PLAYGROUND),
  INTROSPECTION: ['true', true].includes(INTROSPECTION)
});

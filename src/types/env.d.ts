import type { Environment } from '@fellesdatakatalog/graphql/lib/types';

export interface EnvironmentVariables {
  NODE_ENV: Environment;
  HOST: string;
  PORT: number;
  PLAYGROUND: boolean;
  INTROSPECTION: boolean;
}

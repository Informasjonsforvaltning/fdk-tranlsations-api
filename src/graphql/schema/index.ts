import { buildFederatedSchema } from '@apollo/federation';
import { SchemaDirectiveVisitor } from 'apollo-server';

import resolvers from '../resolvers';
import typeDefs from '../type-defs';
import directives from '../directives';

const schema = buildFederatedSchema([{ typeDefs, resolvers }]);

SchemaDirectiveVisitor.visitSchemaDirectives(schema, directives);

export default schema;

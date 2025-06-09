import { makeExecutableSchema } from '@graphql-tools/schema';

import authTypeDefs from './modules/auth/typeDefs';
import authResolvers from './modules/auth/resolvers';

export const schema = makeExecutableSchema({
  typeDefs: [authTypeDefs],
  resolvers: [authResolvers],
});

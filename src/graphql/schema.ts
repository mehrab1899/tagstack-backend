import { makeExecutableSchema } from '@graphql-tools/schema';

import authTypeDefs from './modules/auth/typeDefs';
import authResolvers from './modules/auth/resolvers';
import tagResolvers from './modules/tag/resolvers';
import tagTypeDefs from './modules/tag/typeDefs';

export const schema = makeExecutableSchema({
  typeDefs: [authTypeDefs,tagTypeDefs],
  resolvers: [authResolvers,tagResolvers],
});

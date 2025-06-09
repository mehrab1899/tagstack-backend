import { ApolloServer } from 'apollo-server';
import { schema } from './graphql/schema';
import { createContext } from './context';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const server = new ApolloServer({
    schema,
    context: createContext,
  });

  const { url } = await server.listen({ port: 4000 });
  console.log(`🚀 Server ready at ${url}`);
}

startServer().catch((err) => {
  console.error('❌ Failed to start server:', err);
});

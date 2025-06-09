import { signup, login } from '../../../services/auth.service';
import { Context } from '../../../context';

const resolvers = {
  Query: {
    me: async (_: any, __: any, context: Context) => context.user,
  },
  Mutation: {
    signup: async (_: any, args: { email: string; password: string }) => {
      return await signup(args.email, args.password);
    },
    login: async (_: any, args: { email: string; password: string }) => {
      return await login(args.email, args.password);
    },
  },
};

export default resolvers;

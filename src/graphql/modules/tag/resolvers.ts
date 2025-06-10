import { createTag, getTagsByUser } from '../../../services/tag.service';
import { Context } from '../../../context';

const resolvers = {
  Query: {
    tags: async (_: any, __: any, context: Context) => {
      if (!context.user) throw new Error('Unauthorized');
      return await getTagsByUser(context.user.id);
    },
  },
  Mutation: {
    createTag: async (_: any, args: { name: string }, context: Context) => {
      if (!context.user) throw new Error('Unauthorized');
      return await createTag(args.name, context.user.id);
    },
  },
};

export default resolvers;

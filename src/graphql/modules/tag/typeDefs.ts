import { gql } from 'apollo-server';

const typeDefs = gql`
  type Tag {
    id: ID!
    name: String!
    createdAt: String!
  }

  extend type Query {
    tags: [Tag!]!
  }

  extend type Mutation {
    createTag(name: String!): Tag!
  }
`;

export default typeDefs;

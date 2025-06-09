import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    createdAt: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  # 👇 ADD ROOT TYPES
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  extend type Query {
    me: User
  }

  extend type Mutation {
    signup(email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
`;

export default typeDefs;

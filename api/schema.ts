// api/schema.ts

import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    hello: String
    randomNumber: Int
  }
`;

export const resolvers = {
  Query: {
    hello: () => 'Hello from GraphQL!',
    randomNumber: () => Math.floor(Math.random() * 100),
  },
};

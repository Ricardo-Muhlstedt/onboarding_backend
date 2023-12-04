import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    User: User!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
    birthDate: String!
  }

  type User {
    id: ID!
    name: String!
    email: Sring!
    birthDate: String!
  }

  type Mutation {
    createUser(data: UserInput!): User!
  }
`;

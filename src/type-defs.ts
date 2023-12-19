import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    getUser: User!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
    birthDate: String!
    age: Int!
  }

  type User {
    id: ID!
    name: String!
    email: Sring!
    birthDate: String!
    age: Int!
  }

  type Mutation {
    createUser(data: UserInput!): User!
  }
`;

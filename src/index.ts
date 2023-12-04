import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { gql } from "apollo-server";
import { typeDefs } from "type-defs";
import { resolvers } from "resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at: ${url}`);
});

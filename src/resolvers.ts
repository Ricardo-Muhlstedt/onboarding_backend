import { createUserUseCase } from "domain/create-user";

export const resolvers = {
  Mutation: {
    createUser: (_, args) => createUserUseCase(args.data),
  },
};

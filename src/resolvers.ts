import { createUserUseCase } from "domain/create-user";

export const resolvers = {
  Mutation: {
    createUser: (_, data) => createUserUseCase(data),
  },
};

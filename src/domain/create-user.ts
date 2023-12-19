import { UserEntity } from "entity/user-entity";
import { AppDataSource } from "data-source";

interface UserInputModel {
  name: string;
  email: string;
  password: string;
  birthDate: string;
  age: number;
}

export async function createUserUseCase(input: UserInputModel) {
  const userRepository = AppDataSource.getRepository(UserEntity);

  const userDb = await userRepository.find({ where: { email: input.email } });

  if (userDb) {
    throw new Error(`This user already exists`);
  }

  if (input.password.length < 6) {
    throw new Error(`The password must be at least 6 characters`);
  }

  if (!/\d/.test(input.password)) {
    throw new Error(`The password must contain at least one digit`);
  }

  if (!/[a-zA-Z]/.test(input.password)) {
    throw new Error(`The password must contain at least one letter`);
  }

  return await userRepository.save(input);
}

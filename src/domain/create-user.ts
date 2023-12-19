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

  return await userRepository.save(input);
}

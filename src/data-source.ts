import { DataSource } from "typeorm";
import { UserEntity } from "./entity/user-entity.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "db",
  synchronize: true,
  logging: false,
  entities: [UserEntity],
  migrations: [],
  subscribers: [],
});

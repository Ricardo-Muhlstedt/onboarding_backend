
import { DataSource } from "typeorm"
import { UserEntity } from "./entity/user-entity.js"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "test_user",
    password: "test_senha",
    database: "test_db",
    synchronize: true,
    logging: false,
    entities: [UserEntity],
    migrations: [],
    subscribers: [],
})

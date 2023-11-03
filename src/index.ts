import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    console.log("deu certo porra")
}).catch(error => console.log(error))

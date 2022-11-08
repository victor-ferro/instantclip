import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "ferro-11",
    database: "instantclip",
    synchronize: true,
    logging: false,
    entities: [__dirname + '/**/entities/*.entity.ts'],
    migrations: [__dirname + '/database/reverts/*{.ts,.js}'],
    subscribers: [],
})

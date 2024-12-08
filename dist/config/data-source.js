"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const postgresConfig = {
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "AWS",
};
exports.AppDataSource = new typeorm_1.DataSource(Object.assign(Object.assign({}, postgresConfig), { type: "postgres", entities: ["src/entities/*{.ts,.js}"], synchronize: true, logging: true, migrationsTableName: "migrationtable", migrations: ["src/migrations/*{.ts,.js}"] }));

import { createConnection } from "typeorm";
import Post from "../models/Post";

createConnection({
  type: "postgres",
  port: 5432,
  database: "postgres_server",
  username: "postgres",
  password: "252525",
  logging: true,
  synchronize: true,
  entities: [Post],
});

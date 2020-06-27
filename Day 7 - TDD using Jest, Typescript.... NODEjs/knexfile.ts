import path from "path";

const config = {
  client: "sqlite3",

  connection: {
    filename:
      process.env.NODE_ENV === "dev"
        ? path.resolve(__dirname, "__tests__", "testDatabase.sqlite")
        : path.resolve(__dirname, "src", "database", "database.sqlite"),
  },

  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
};

export const { client, connection, migrations } = config;

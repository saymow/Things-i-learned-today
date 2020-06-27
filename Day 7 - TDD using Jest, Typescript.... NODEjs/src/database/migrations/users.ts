import Knex from "knex";

export const up = (knex: Knex) => {
  return knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").unique().notNullable();
    table.string("password_hash").notNullable();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTable("users");
};

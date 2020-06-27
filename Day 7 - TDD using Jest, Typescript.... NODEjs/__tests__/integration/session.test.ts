import request from "supertest";
import knex from "../../src/database/connections";
import bcrypt from "bcrypt";

import App from "../../src/app";
import truncate from "../utils/truncate";

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate using valid credentials", async () => {
    const user: number[] | any = await knex("users").insert({
      name: "teste",
      email: "teste@teste.com",
      password_hash: await bcrypt.hash("123456", 8),
    });

    let id = user[0];

    const userRegistered = await knex("users")
      .where("id", id || null)
      .first();

    const response = await request(App).post("/sessions").send({
      email: userRegistered.email,
      password: "123456",
    });

    expect(response.status).toBe(200);
  });

  it("should not authenticate using invalid credentials", async () => {
    const user: number[] | any = await knex("users").insert({
      name: "teste",
      email: "teste@teste.com",
      password_hash: await bcrypt.hash("123456", 8),
    });

    let id = user[0];

    const userRegistered = await knex("users")
      .where("id", id || null)
      .first();

    const response = await request(App).post("/sessions").send({
      email: userRegistered.email,
      password: "32134",
    });

    expect(response.status).toBe(401);
  });

  it("should return an jwt token when authenticated", async () => {
    const user: number[] | any = await knex("users").insert({
      name: "teste",
      email: "teste@teste.com",
      password_hash: await bcrypt.hash("123456", 8),
    });

    let id = user[0];

    const userRegistered = await knex("users")
      .where("id", id || null)
      .first();

    const response = await request(App).post("/sessions").send({
      email: userRegistered.email,
      password: "32134",
    });

    expect(response.body).toHaveProperty("token");
  });
});

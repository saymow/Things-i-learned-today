import bcrypt from 'bcrypt';
import connection from "../../src/database/connections";
import truncate from "../utils/truncate";

interface User {
  name: string;
  email: string;
  password_hash: string;
}

describe("User", () => {
  beforeEach(async () => {
    await truncate()
  })

  it("should encrypt user password", async () => {
    const User = await connection("users").insert({
        name: "teste",
        email: "teste@teste.com",
        password_hash: await bcrypt.hash("123456", 8),
    })

    let id = User[0];

    const UserData : User = await connection("users").where("id", id).first();

    const compareHash = await bcrypt.compare("123456", UserData.password_hash) 

    expect(compareHash).toBe(true);
  })
})
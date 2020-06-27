import { Request, Response } from "express";
import { QueryBuilder } from "Knex";
import bcrypt from "bcrypt";

import knex from "../database/connections";

interface User {
  name: string;
  email: string;
  password_hash: string;
}

class SessionController {
  async store(req: Request, res: Response) {
    const { email, password } = req.body;

    const user: User = await knex("users").where("email", email).first();

    if (!user) return res.status(401).json({ message: "User not found." });

    const passwordIsCorrect = await bcrypt.compare(
      password,
      user.password_hash
    );

      // 1:04:21

    if (!passwordIsCorrect)
      return res.status(401).json({ message: "Invalid password." });

    return res.status(200).json({
      name: user.name,
      email: user.email,
    });
  }
}

export default new SessionController();

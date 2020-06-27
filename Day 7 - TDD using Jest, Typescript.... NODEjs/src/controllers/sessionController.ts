import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import config from "../config/auth.json";
import knex from "../database/connections";

interface User {
  id: number;
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

    if (!passwordIsCorrect)
      return res.status(401).json({ message: "Invalid password." });

    return res.status(200).json({
      name: user.name,
      email: user.email,
      token: generateToken({
        id: user.id,
      }),
    });
  }
}

function generateToken(params: {}) {
  return jwt.sign(params, config.secret, {
    expiresIn: 8640,
  });
}

export default new SessionController();

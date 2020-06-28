import { Request, Response } from "express";

import Queue from "../lib/queue";

export default {
  async store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const User = {
      name,
      email,
      password,
    };

    await Queue.add("Register email", {
      User,
    });

    return res.json(User);
  },
};

import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
      });

      res.status(201).send();
    } catch (err) {
      res.status(400).send({
        message: err.message || "Unexpected error.",
      });
    }
  }
}

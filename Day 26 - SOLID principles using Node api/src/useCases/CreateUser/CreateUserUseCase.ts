import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase {
  //private usersRepository: IUsersRepository;

  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {
    // this.usersRepository = usersRepository
  }

  async execute(data: ICreateUserRequestDTO) {
    const userIsTaken = await this.usersRepository.findByEmail(data.email);

    if (userIsTaken) throw new Error("User already exists.");

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Testing",
        email: "test@test.com",
      },
      subject: "Wecolme.",
      body: "<p>You're now able to perform login on our plataform.</b>",
    });
  }
}

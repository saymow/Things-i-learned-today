import Mail from "../lib/mail";

interface RegisterEmail {
  data: {
    User: {
      name: string;
      email: string;
    };
  };
}

export default {
  key: "Register email",
  options: {
    delay: 5000,
  },
  async handle({ data }: RegisterEmail) {
    const { User } = data;
 
    await Mail.sendMail({
      from: "Queue Test <teste@teste.com.br>",
      to: `${User.name} <${User.email}>`,
      subject: "cadastro usuário",
      html: `Olá ${User.name}, sistema de filas.`,
    });
  },
};

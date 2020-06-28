export default {
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT) || 0,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

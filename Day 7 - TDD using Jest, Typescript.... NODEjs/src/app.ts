import express, {Express} from "express";
import Routes from "./routes";

class AppController {
  express: Express;
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(Routes);
  }
}

export default new AppController().express;
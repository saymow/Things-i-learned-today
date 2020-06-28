import "dotenv/config";
import express from "express";

import Routes from './routes';

const App = express();

App.use(express.json());
App.use(Routes);


App.listen(3333);
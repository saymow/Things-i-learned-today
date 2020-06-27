import express from 'express';

import SessionController from "./controllers/sessionController";

const Routes = express.Router();


Routes.post("/sessions", SessionController.store)

export default Routes;  
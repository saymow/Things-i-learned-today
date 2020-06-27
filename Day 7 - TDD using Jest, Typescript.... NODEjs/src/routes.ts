import express from "express";

import authMiddleWare from './middleware/auth';

import SessionController from "./controllers/sessionController";

const Routes = express.Router();

Routes.post("/sessions", SessionController.store);

Routes.use(authMiddleWare);

Routes.get("/dashboard", (req, res) => {
    return res.status(200).send();
})

export default Routes;

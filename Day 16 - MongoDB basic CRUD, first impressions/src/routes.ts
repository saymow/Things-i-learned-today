import express from "express";

import postController from "./controllers/postController";

const routes = express.Router();

routes.post("/", postController.store);
routes.get("/", postController.show);
routes.put("/", postController.update);
routes.delete("/", postController.delete);

export default routes;

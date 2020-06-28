import express from "express";
import BullBoard from "bull-board";

import UserController from "./app/controller/UserController";

import Queue from "./app/lib/queue";
BullBoard.setQueues(Queue.queues.map((queue) => queue.bull));

const Routes = express();

Routes.get("/", (req, res) => res.send("<p>'<h1>XDXD</h1>'</p>"));
Routes.post("/register", UserController.store);
Routes.use("/admin/queues", BullBoard.UI);

export default Routes;

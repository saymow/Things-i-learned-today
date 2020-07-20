import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

import routes from "./routes";

const app = express();
app.use(express.json())
app.use(cors());
app.use("/api", routes);

app.listen(3333, () => console.log("Server is open."))

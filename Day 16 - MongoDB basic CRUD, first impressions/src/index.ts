import express from "express";

import routes from "./routes";

const App = express();
App.use(express.json());
App.use(routes);


App.listen(3334, () => {
  console.log("Server opened.")
})
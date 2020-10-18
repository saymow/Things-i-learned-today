import * as http from "http";

import "./database/connection";

import PostsController from "./controllers/Posts";

const postsController = new PostsController();

const server = http.createServer(async (req, res) => {
  if (req.url?.startsWith("/api/post")) {
    res.writeHead(200, { "Content-Type": "application/json" });

    switch (req.method) {
      case "GET":
        if (req.url.match(/\/api\/post\/([0-9]+)/))
          return postsController.show(req, res);
        else return postsController.index(req, res);
      case "POST":
        return postsController.store(req, res);
      case "PUT":
        return postsController.update(req, res);
      case "DELETE":
        return postsController.delete(req, res);
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => console.log("Server running on " + PORT));

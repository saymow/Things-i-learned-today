import { ServerResponse, IncomingMessage } from "http";
import { getConnection, QueryFailedError } from "typeorm";
import Post from "../models/Post";
import parseBody from "../utils/parseBody";

export default class PostsController {
  async index(req: IncomingMessage, res: ServerResponse) {
    try {
      const posts = await Post.find();

      res.end(JSON.stringify(posts));
    } catch (err) {
      console.error(err);
    }
  }

  async show(req: IncomingMessage, res: ServerResponse) {
    try {
      const id = (req.url as string).split("/")[3];

      const post = await Post.findOneOrFail(id);

      res.end(JSON.stringify(post));
    } catch (err) {
      if (err instanceof QueryFailedError) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Post not found" }));
      }

      console.error(err);
    }
  }

  async store(req: IncomingMessage, res: ServerResponse) {
    try {
      const { title, text } = await parseBody(req);

      const post = Post.create({
        title,
        text,
      });

      await Post.save(post);

      res.writeHead(201, { "Content-type": "application/json" });
      res.end(JSON.stringify(post));
    } catch (err) {
      console.error(err);
    }
  }

  async update(req: IncomingMessage, res: ServerResponse) {
    try {
      const { title, text } = await parseBody(req);
      const id = req.url?.split("/")[3];

      // const user = await Post.update(
      //   { id: (id as unknown) as number },
      //   { title, text }
      // );

      const response = await getConnection()
        .createQueryBuilder()
        .update(Post)
        .set({ title, text })
        .where("id = :id", { id })
        .returning("*")
        .execute();

      res.end(JSON.stringify(response.raw[0]));
    } catch (err) {
      console.error(err);
    }
  }

  async delete(req: IncomingMessage, res: ServerResponse) {
    try {
      const id = req.url?.split("/")[3] as string;

      await Post.delete(id);

      res.end(JSON.stringify({ message: "Post Deleted SUCCESSFULY" }));
    } catch (err) {
      console.error(err);
    }
  }
}

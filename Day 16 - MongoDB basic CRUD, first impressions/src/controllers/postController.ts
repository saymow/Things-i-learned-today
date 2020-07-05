import { Request, Response } from "express";

import Post from "../models/Post";

export = {
  async store(req: Request, res: Response) {
    const { author, title, data } = req.body;

    try {
      if (await Post.findOne({ title })) {
        return res.status(400).json({ message: "Title already in use." });
      }

      const post = await Post.create({
        author,
        title,
        data,
      });

      return res.json({
        post,
      });
    } catch (err) {
      return res.status(400).json({ message: "An error occurred." });
    }
  },

  async show(req: Request, res: Response) {
    try {
      const postList = await Post.find();

      return res.json({
        postList,
      });
    } catch (err) {
      return res.status(400).json({
        message: "An error occurred.",
      });
    }
  },

  async update(req: Request, res: Response) {
    const { author, title, data } = req.body;

    try {
      const postExists = await Post.findOne({
        author,
        title,
      });

      if (!postExists)
        return res.status(400).json({
          message:
            "You are either the post owner's or there are no post using this title.",
        });

      await Post.update(
        {
          author,
          title,
        },
        {
          data,
        }
      );

      return res.json({
        message: `The post [${title}] was successfully updated.`
      });
    } catch (err) {
      return res.status(400).json({
        message: "An error occurred.",
      });
    }
  },

  async delete(req: Request, res: Response) {
    const { author, title } = req.body;

    try {
      const postExists = await Post.findOne({
        author,
        title,
      });

      if (!postExists)
        return res.status(400).json({
          message:
            "You are either not the post owner's or there are no posts using this title.",
        });

      const Deleted = await Post.deleteOne({
        author,
        title,
      });

      return res.json({
        message: `The post [${title}] was successfully deleted.`,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: "An error occurred.",
      });
    }
  },
};

import { Request, Response, NextFunction } from "express";
import config from "../config/auth.json";
import jwt from "jsonwebtoken";

export default function middleWare(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ message: "Token not provided" });

  let parts = authorization.split(" ");

  if (parts.length !== 2)
    return res.status(401).json({ error: { message: "Token error" } });

  let [schema, token] = parts;

  if (!/^Bearer$/.test(schema))
    return res.status(401).json({ error: { message: "Token malformated." } });

  jwt.verify(
    token,
    config.secret,
    (err, decodedId: { id?: string } | undefined) => {
      if (err)
        return res.status(401).json({ error: { message: "Invalid token" } });

      req.body.user_id = decodedId?.id;

      return next();
    }
  );
}

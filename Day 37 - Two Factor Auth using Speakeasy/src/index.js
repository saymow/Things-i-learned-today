const express = require("express");
const speakeasy = require("speakeasy");
const uuid = require("uuid");
const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");

const app = express();
const PORT = process.env.PORT || 3333;

const db = new JsonDB(new Config("Database", true, false, "/"));

app.use(express.json());

app.get("/api", (req, res) => {
  res.send({ message: "Two factor auth example" });
});

app.post("/api/register", (req, res) => {
  const id = uuid.v4();

  try {
    const path = `/user/${id}`;
    const tmp_secret = speakeasy.generateSecret();

    db.push(path, {
      id,
      tmp_secret,
    });

    return res.send({ id, secret: tmp_secret.base32 });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error gererating secret" });
  }
});

app.post("/api/verify", (req, res) => {
  const { token, userId } = req.body;

  try {
    const path = `/user/${userId}`;
    const user = db.getData(path);

    const { base32: secret } = user.tmp_secret;

    const verified = speakeasy.totp.verify({
      encoding: "base32",
      secret,
      token,
    });

    if (!verified) return res.send({ verified: false });

    db.push(path, {
      id: userId,
      secret: user.tmp_secret,
    });

    return res.send({ verified: true });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error finding user" });
  }
});

app.post("/api/validate", (req, res) => {
  const { token, userId } = req.body;

  try {
    const path = `/user/${userId}`;
    const user = db.getData(path);

    const { base32: secret } = user.secret;

    const tokenValidates = speakeasy.totp.verify({
      encoding: "base32",
      secret,
      token,
      window: 1,
    });

    if (!tokenValidates) return res.send({ verified: false });

    return res.send({ verified: true });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error finding user" });
  }
});

app.listen(PORT, () => console.log("Server is up and running"));

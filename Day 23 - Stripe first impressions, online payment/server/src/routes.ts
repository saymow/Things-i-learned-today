import express from "express";

import postCharge from "./postCharge";

const router = express.Router();

router.post("/stripe/charge", postCharge);

router.all("*", (_, res) =>
  res.json({ message: "please make a POST request to /stripe/charge" })
);

export default router;

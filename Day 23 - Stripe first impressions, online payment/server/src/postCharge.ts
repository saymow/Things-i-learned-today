import { Request, Response } from "express";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2020-03-02",
  typescript: true,
});

async function postCharge(req: Request, res: Response) {
  try {
    const { amount, source, receipt_email } = req.body;

    const charge = await stripe.charges.create({
      amount,
      currency: "brl",
      source,
      receipt_email,
    });

    if (!charge) throw new Error("charge unsuccessful");

    res.json({
      message: "charge posted successfully",
      charge,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export default postCharge;

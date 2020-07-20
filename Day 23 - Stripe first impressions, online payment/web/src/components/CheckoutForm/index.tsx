import React, { useState, FormEvent } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
  ReactStripeElements,
} from "react-stripe-elements";
import axios from "axios";

const Container = styled.div``;

interface Props {
  productPrice: number;
}

const CheckoutForm: React.FC<
  Props & ReactStripeElements.InjectedStripeProps
> = ({ productPrice, stripe }) => {
  const history = useHistory();
  const [receiptUrl, setReceiptUrl] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe) return alert("Payment Error.");

    const { token } = await stripe.createToken();

    if (!token) return alert("Token error.");

    const order = await axios.post("http://localhost:3333/api/stripe/charge", {
      amount: productPrice.toString().replace(".", ""),
      source: token.id,
      receipt_email: email,
    });

    console.log(order);

    setReceiptUrl(order.data.charge.receipt_url);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <CardNumberElement />
        <CardExpiryElement />
        <CardCVCElement />
        <button type="submit">Submit</button>
      </form>
      {JSON.stringify(receiptUrl)}
    </Container>
  );
};

export default injectStripe(CheckoutForm);

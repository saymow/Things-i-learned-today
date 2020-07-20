import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { StripeProvider, Elements } from "react-stripe-elements";

import CheckoutForm from "../../components/CheckoutForm";

const ApiKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

interface location {
  state: State;
}

interface State {
  price: number;
}

const Checkout: React.FC = () => {
  const history = useHistory();
  const { state }: location = useLocation();

  if (!state || !state.price) history.push("/");

  return (
    <StripeProvider apiKey={ApiKey as string}>
      <Elements>
        <CheckoutForm productPrice={state.price} />
      </Elements>
    </StripeProvider>
  );
};

export default Checkout;

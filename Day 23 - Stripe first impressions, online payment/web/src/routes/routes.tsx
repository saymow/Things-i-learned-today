import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Products from "../pages/Products";
import Checkout from "../pages/Checkout";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

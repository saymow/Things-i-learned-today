import React from "react";
import { useHistory } from "react-router-dom";

import { products as FakeProducts } from "../../fakeProducts";

import { Container, Product, Info, Image, Button } from "./styles";

const Products: React.FC = () => {
  const history = useHistory();

  function handleBuy(price: number) {
    history.push("/checkout", {
      price,
    });
  }

  return (
    <Container>
      {FakeProducts.map((product) => (
        <Product key={product.id}>
          <Info>
            <h1>{product.name}</h1>
            <p>{product.desc}</p>
            <p>${product.price}</p>
          </Info>
          <Image>
            <img src={product.img} alt={product.name} />
          </Image>
          <Button onClick={() => handleBuy(product.price)}>Buy it</Button>
        </Product>
      ))}
    </Container>
  );
};

export default Products;

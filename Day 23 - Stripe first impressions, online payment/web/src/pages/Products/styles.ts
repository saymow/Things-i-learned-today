import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Product = styled.div`
  position: relative;
  width: 100%;
  max-width: 560px;

  display: flex;
  justify-content: space-between;
  box-shadow: 3px 3px 5px #999;
  margin: 3rem 0;
  padding: 1rem;
`;

export const Info = styled.div`

`;

export const Image = styled.div`
  >img {
    width: 100%;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 5%;
  right: 40%;

  padding: .5rem;
  width: 20%;
`;
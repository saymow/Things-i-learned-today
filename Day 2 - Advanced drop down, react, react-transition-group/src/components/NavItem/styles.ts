import styled from "styled-components";

export const Container = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.a`
  --button-size: calc(var(--nav-size) * 0.6);
  width: var(--button-size);
  height: var(--button-size);

  background-color: #484a4d;

  margin: 2px;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;

  &:hover {
    filter: brightness(1.2);
  }

  svg {
    fill: var(--text-color);
    width: 25px;
    height: 25px;
  }
`;

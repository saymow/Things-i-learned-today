import styled from "styled-components";
import { Button as NavButton } from "../NavItem/styles";

export const Container = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  overflow: hidden;

  transition: height var(--speed) ease;
`;

export const TransitionElement = styled.div`
  padding: 1rem;

  &.menu {
    width: 100%;
  }

  &.menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }

  &.menu-primary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }

  &.menu-primary-exit {
    position: absolute;
  }

  &.menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all var(--speed) ease;
  }

  /* -----------------------------------------------------*/

  &.menu-secondary-enter {
    transform: translateX(110%);
  }

  &.menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }

  &.menu-secondary-exit {
  }

  &.menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all var(--speed) ease;
  }
`;

export const Item = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #525357;
  }

  span:last-child {
    margin-left: auto;
  }
`;

export const DropdownStyledIcon = styled(NavButton)`
  margin-right: 3px;
`;

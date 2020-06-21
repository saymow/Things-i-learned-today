import React from "react";
import {
  Html5,
  Css3,
  Javascript,
  ReactLogo,
} from "styled-icons/boxicons-logos";
import { DownArrowAlt } from "@styled-icons/boxicons-regular";

import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import Dropdown from "./components/Dropdown";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Navbar>
        <NavItem icon={<Html5 />} />
        <NavItem icon={<Css3 />} />
        <NavItem icon={<Javascript />} />
        <NavItem icon={<ReactLogo />} />
        <NavItem icon={<DownArrowAlt />}>
          <Dropdown />
        </NavItem>
      </Navbar>
      <GlobalStyles />
    </>
  );
}

export default App;

import React, { useState } from "react";

import { CSSTransition } from "react-transition-group";
// import {Settings2 as Settings} from "@styled-icons/evaicons-solid";
import { ArrowBackOutline as Arrow} from "@styled-icons/evaicons-outline"
import { Settings } from "@styled-icons/material";

import {
  Container,
  TransitionElement,
  Item,
  DropdownStyledIcon,
} from "./styles";

interface Props {
  leftIcon?: React.ReactElement | string;
  rightIcon?: React.ReactElement | string;
  goToMenu?: string;
}

const Dropdown: React.FC = (Props) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState<number | undefined>(undefined);

  function calcHeight(element: HTMLElement | undefined) {
    const height = element?.offsetHeight;
    if (height) setMenuHeight(height);
    /* Because of box-sizing: border-box;
    Height is considering padding, for instance, if i set height to 50px, it will be 18, the reason is 
    because we have 16px padding. Therefore, i set +32 hardcoded to solve the problem.*/
  }

  const DropdownItem: React.FC<Props> = (props) => {
    return (
      <Item onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <DropdownStyledIcon>{props.leftIcon}</DropdownStyledIcon>
        
        {props.children}

        <span>{props.rightIcon}</span>
      </Item>
    );
  };

  return (
    <Container style={{height: menuHeight ? menuHeight : "unset"}} >
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <TransitionElement className="menu">
          <DropdownItem
            leftIcon={<Settings />}
            rightIcon="&#9917;"
            
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </TransitionElement>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <TransitionElement >
          <DropdownItem leftIcon={<Arrow />}  goToMenu="main">
          </DropdownItem>
          <DropdownItem leftIcon="&#9917;" >
            Settings
          </DropdownItem>
          <DropdownItem>
            Testing
          </DropdownItem>
          <DropdownItem>
            Testing
          </DropdownItem>
          <DropdownItem>
            Testing
          </DropdownItem>
          <DropdownItem>
            Testing
          </DropdownItem>
          <DropdownItem>
            Testing
          </DropdownItem>
        </TransitionElement>
      </CSSTransition>
    </Container>
  );
};

export default Dropdown;

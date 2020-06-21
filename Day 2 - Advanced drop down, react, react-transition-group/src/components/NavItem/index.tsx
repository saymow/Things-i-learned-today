import React, { useState } from "react";

import { Container, Button } from "./styles";

interface Props {
  icon: React.ReactElement | string;
}

const NavItem: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Button href="#" onClick={() => setOpen(!open)}>
    
        {props.icon}
      </Button>

      {open && props.children}
    </Container>
  );
};

export default NavItem;

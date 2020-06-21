import React from 'react';

import { Container, Ul } from './styles';

const Navbar: React.FC = (props) => {
  return(
    <Container>
      <Ul>
        {props.children}
      </Ul>
    </Container>
  );
}

export default Navbar;
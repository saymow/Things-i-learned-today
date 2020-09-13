import React from "react";

function Header({ children }) {
  return (
    <header>
      <nav>
        <ul>{children}</ul>
      </nav>
    </header>
  );
}

export default Header;

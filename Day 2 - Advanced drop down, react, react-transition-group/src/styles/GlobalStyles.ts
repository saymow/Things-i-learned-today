import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
  --bg: #242526;
  --b-accent: #484a4d;
  --text-color: #dadce1;
  --nav-size: 60px;
  --border: 1px solid #474a4d;
  --border-radius: 8px;
  --speed: 500ms;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    cursor: pointer;  
  }

  body {
    background-color: #161616;
  } 
`;

export default GlobalStyles;

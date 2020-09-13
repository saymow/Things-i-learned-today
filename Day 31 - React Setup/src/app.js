import React, { useState } from "react";
import Main from "./components/Main";

import image from "./assets/image.jpg";

import "./app.css";

export default function App() {
  const [main, toggleMain] = useState(true);

  return (
    <div>
      <img src={image} style={{ display: "block" }} />
      <button onClick={() => toggleMain((prev) => !prev)}>
        {main ? "Unmout " : "Moun "}Main
      </button>

      {main && <Main />}
    </div>
  );
}

import React, { useState } from "react";
import "./App.css";

import UseEffect from "./useEffectSolution";
import Basic from "./basicSolution";
import UseMemo from "./useMemoSolution";

function App() {
  return (
    <div className="App">
      <Basic />
      <UseEffect />
      <UseMemo />
    </div>
  );
}

export default App;

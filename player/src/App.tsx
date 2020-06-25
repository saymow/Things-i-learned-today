import React, { useState, useCallback } from "react";
import "./App.css";

import UseCallBack from "./useCallBack";

function App() {
  const [count, setCount] = useState(0);
  const items = [1, 2, 3, 4, 5];

  const increment = useCallback((n) => {
    setCount((lastValue) => lastValue + n);
  }, []);

  return (
    <div className="App">
      <h1>Count: {count}</h1>

      <div>
        <div className="field">
          <h1>Use callback</h1>
          {items.map((item) => (
            <UseCallBack
              key={item}
              increment={increment}
              n={item}
            />
          ))}
        </div>

        <div className="field">
          <h1>Normal</h1>
          {items.map((item) => (
            <UseCallBack
              key={item}
              increment={() => setCount(count + item)}
              n={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

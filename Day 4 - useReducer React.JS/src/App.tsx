import React, { useReducer } from "react";

import "./App.css";

interface Items {
  value: number;
  bigger: boolean;
}

interface Action {
  type: string;
  payload?: {};
}

function action(state: Items[], action: Action) {
  switch (action.type) {
    case "add-item":
      const newState = [
        ...state,
        { value: Math.round(Math.random() * 100), bigger: false },
      ].sort((a, b) => b.value - a.value);

      return [...newState];

    case "reset-items":
      return [];
    default:
      return state;
  }
}

function App() {
  const [state, dispacth] = useReducer(action, []);

  return (
    <div className="App">
      <div className="main">
        <div className="inputWrapper">
          <button
            onClick={() => {
              dispacth({
                type: "reset-items",
              });
            }}
          >
            Reset
          </button>
          <button
            onClick={() => {
              dispacth({
                type: "add-item",
              });
            }}
          >
            Add
          </button>
        </div>
        <ul className="itemList">
          {state.map((item, i) => (
            <li
              key={i}
              className={item.bigger ? "listItem bigger" : "listItem"}
            >
              <strong>
                Random: <span>{item.value}</span>
              </strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

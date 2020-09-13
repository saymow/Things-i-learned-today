import React, { useReducer } from "react";

import Header from "../Header";
const projects = ["project A", "project B"];

function Main() {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <div>
      <button
        onClick={() => {
          projects.push(`Project ${Math.random()}`);
          forceUpdate();
        }}
      >
        Add project
      </button>
      <Header>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </Header>
    </div>
  );
}

export default Main;

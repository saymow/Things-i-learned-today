import React, { useState, useEffect, useRef } from "react";

interface ResponseObj {
  title: string;
}

const Basic: React.FC = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  const [text, setText] = useState("");

  useEffect(() => {
    async function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
          const data = json.reduce((acummlator: String, obj: ResponseObj) => {
            return acummlator.concat(obj.title);
          }, "");

          setText(data);
        });
    }

    fetchData();
  }, []);

  function getLongestWord(string: string) {
    if (!string) return;

    console.log("Basic function rendered");

    let longestWord = string.split(" ").reduce((accumulator, current) => {
      return accumulator.length > current.length ? accumulator : current;
    }, "");

    return longestWord;
  }

  return (
    <div>
      <h1>Basic</h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <h3>Longest word</h3>
      <p>{getLongestWord(text)}</p>
      <p>Renders: {renderCount.current++}</p>
    </div>
  );
};

export default Basic;

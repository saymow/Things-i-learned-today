import React, { useState, useEffect, useRef, useMemo } from "react";

interface ResponseObj {
  title: string;
}

const UseMemo: React.FC = () => {
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

  const longestString = useMemo(() => getLongestWord(text), [
    text,
  ]);

  console.warn("The useMemo Advantages can't be noticed with React Strict Mode, used in development, remember do desactive it.")

  return (
    <div>
      <h1>Use Memo</h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <h3>Longest word</h3>
      <p>{longestString}</p>
      <p>Renders: {renderCount.current++}</p>
    </div>
  );
};

export default UseMemo;


function getLongestWord(string: string) {
  if (!string) return;

  console.log("UseMemo function rendered");

  let longestWord = string.split(" ").reduce((accumulator, current) => {
    return accumulator.length > current.length ? accumulator : current;
  }, "");

  return longestWord;
}
import React, { useState, useEffect, useRef } from "react";

interface ResponseObj {
  title: string;
}

const UseEffect: React.FC = () => {
  const [count, setCount] = useState(0);
  const RenderCount = useRef(0);
  const [text, setText] = useState("");
  const [string, setString] = useState("");

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

  useEffect(() => {
    function getLongestWord(string: string) {
      if (!string) return "";

      console.log("UseEffect function rendered");

      let longestWord = string.split(" ").reduce((accumulator, current) => {
        return accumulator.length > current.length ? accumulator : current;
      }, "");

      return longestWord;
    }

    let response = getLongestWord(text);

    setString(response);
  }, [text]);

  return (
    <div>
      <h1>UseEffect</h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <h3>Longest word</h3>
      <p>{string}</p>
      <p>Renders: {RenderCount.current++}</p>
    </div>
  );
};

export default UseEffect;

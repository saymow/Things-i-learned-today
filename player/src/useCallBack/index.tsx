import React, { useRef } from "react";

interface Props {
  increment: (num: number) => void;
  n: number;
}

const ButtonIncrement: React.FC<Props> = React.memo(({ increment, n }) => {
  const renderCouunt = useRef(0);

  return (
    <>
      <button onClick={() => increment(n)}>+ {n}</button>
      <p>Renders: {renderCouunt.current++}</p>
    </>
  );
});

export default ButtonIncrement;

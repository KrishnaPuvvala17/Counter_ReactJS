import React, { useContext } from "react";
import CountContext from "./CountContext";

const Child = () => {
  const context = useContext(CountContext);
  const { countHandler } = context;

  return (
    <div>
      <button onClick={countHandler}>Increment</button>
    </div>
  );
};
export default Child;

import React, { useState } from "react";

import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  const countHandlerDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="myCenter">
      <h5>{count}</h5>
      <button type="button" class="btn btn-warning" onClick={countHandler}>
        Increase
      </button>
      <button
        type="button"
        class="btn btn-warning btn2"
        onClick={countHandlerDecrease}
      >
        Decrease
      </button>
    </div>
  );
};

export default App;

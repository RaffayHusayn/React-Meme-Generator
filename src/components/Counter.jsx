import { useState } from "react";
import "../styles/Counter.css";
import Count from "./Count";

function Counter() {
  const [counter, setCounter] = useState(0);
  function addCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }
  function minusCounter() {
    setCounter((prevCounter) => {
      if (prevCounter > 0) {
        return prevCounter - 1;
      } else {
        return 0;
      }
    });
  }

  function resetCounter() {
    setCounter(0);
  }

  return (
    <div className="timer-container">
      <button className="timer-btn timer-minus" onClick={minusCounter}>
        -
      </button>
      <Count number={counter} />
      <button className="timer-btn timer-plus" onClick={addCounter}>
        +
      </button>
      <button className="timer-reset" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
}

export default Counter;

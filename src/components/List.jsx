import { useState } from "react";
import "../styles/List.css";
function List() {
  const [thingsArray, setThingsArray] = useState(["thing 1", "thing 2"]);
  function pushThing() {
    setThingsArray((prevArray) => {
      //   let arr = new Array().concat(prevArray);
      //   arr.push(`thing ${prevArray.length + 11}`);
      //   return arr;

      //doing the same thing using spread in single line
      return [...prevArray, `thing ${prevArray.length + 1}`];
    });
  }

  function popThing() {
    setThingsArray((prevArray) => {
      return [...prevArray.slice(0, -1)];
    });
  }

  return (
    <div className="list-container">
      <button className="list-btn" onClick={pushThing}>
        Push Item
      </button>
      <button className="list-btn" onClick={popThing}>
        Pop Item
      </button>
      {thingsArray.map((item) => {
        return <h1 key={item}>{item}</h1>;
      })}
    </div>
  );
}

export default List;

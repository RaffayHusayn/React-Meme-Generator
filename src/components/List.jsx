import { useState } from "react";
import "../styles/List.css";
function List() {
  const [thingsArray, setThingsArray] = useState(["thing 1", "thing 2"]);
  function addThing() {
    setThingsArray((prevArray) => {
      //   let arr = new Array().concat(prevArray);
      //   arr.push(`thing ${prevArray.length + 11}`);
      //   return arr;
      //doing the same thing using spread in single line
      return [...prevArray, `thing ${prevArray.length + 1}`];
    });
  }

  return (
    <div className="list-container">
      <button className="list-add-btn" onClick={addThing}>
        Add Item
      </button>
      {thingsArray.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
}

export default List;

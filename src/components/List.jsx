import { useState } from "react";
import "../styles/List.css";
import ListItem from "./ListItem";

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

  function handleRemove(id) {
    setThingsArray((prevArray) => {
      return prevArray.filter((item) => item !== id);
    });
  }

  return (
    <div className="list-container">
      <button className="list-btn" onClick={pushThing}>
        Add Item
      </button>
      {thingsArray.map((item) => {
        return (
          <ListItem
            key={item}
            id={item}
            item={item}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
}

export default List;

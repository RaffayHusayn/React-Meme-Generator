import { useState } from "react";
import "../styles/Navbar.css";
import Pepe from "../images/pepe.png";
function Navbar() {
  let [logo, setLogo] = useState(1);
  function onImgClick() {
    // if the new state doesn't depend on the prev state than we don't
    // need a callback function inside the setter
    setLogo("Don't touch me, Creep");
    setTimeout(() => {
      //changing the state based on prev State is done using
      // a callback inside the setter instead of directly changing
      // it
      setLogo((prevLogo) => prevLogo + 1);
    }, 1000);
  }
  return (
    <nav className="navbar">
      <img
        src={Pepe}
        alt="pepe-logo"
        className="nav-logo"
        onClick={onImgClick}
      />
      <p className="nav-title">{logo}</p>
    </nav>
  );
}

export default Navbar;

import { useState } from "react";
import "../styles/Navbar.css";
import Pepe from "../images/pepe.png";
function Navbar() {
  let [logo, setLogo] = useState("Meme Generator");
  function onImgClick() {
    // if the new state doesn't depend on the prev state than we don't
    // need a callback function inside the setter
    setLogo("Don't touch me, Creep");
    setTimeout(() => {
      setLogo("Meme Generator");
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

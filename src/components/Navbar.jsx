import { useState } from "react";
import "../styles/Navbar.css";
import Pepe from "../images/pepe.png";
function Navbar() {
  const [logo, setLogo] = useState("Meme Generator");
  function onImgClick() {
    setLogo("Don't touch me, Creep");
    setTimeout(() => {
      setLogo("Meme Generator");
    }, 2000);
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

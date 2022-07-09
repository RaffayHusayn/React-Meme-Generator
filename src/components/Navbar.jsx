import { useState } from "react";
import "../styles/Navbar.css";
import Pepe from "../images/pepe.png";
function Navbar() {
  let [logo, setLogo] = useState(1);
  function onImgClick() {
    setLogo("Don't touch me, Creep");
    setTimeout(() => {
      logo++;
      setLogo(logo);
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

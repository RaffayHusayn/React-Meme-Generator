import "../styles/Navbar.css";
import Pepe from "../images/pepe.png";
function Navbar() {
  return (
    <nav className="navbar">
      <img src={Pepe} alt="pepe-logo" className="nav-logo" />
      <p className="nav-title">React Meme Generator</p>
    </nav>
  );
}

export default Navbar;

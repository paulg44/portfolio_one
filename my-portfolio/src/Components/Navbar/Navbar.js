// Component for Navbar
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    //  Navbar
    <nav id="navbar" className="navbar">
      <div className="nav-links">
        <Link to={"/"} id="logo" className="logo">
          <span>&lt;</span>Home<span>/&gt;</span>
        </Link>
        {/* <a href="blogpost.html" className="contact-button">Blogpost</a> */}
        <div className="navbarLeftLinks">
          <Link to={"/projects"} className="contact-button">
            Projects
          </Link>
          <Link to={"/contact"} className="contact-button">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

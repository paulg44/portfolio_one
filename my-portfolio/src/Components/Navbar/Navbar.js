// Component for Navbar
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return (
    //  Navbar
    <nav id="navbar" className="navbar">
      <div class="nav-links">
        <Link to={"/"} id="logo" className="logo"
          ><span>&lt;</span>Home<span>/&gt;</span></Link>
        {/* <a href="blogpost.html" className="contact-button">Blogpost</a> */}
        <Link to={"/contact"} className="contact-button">Contact</Link>
      </div>
    </nav>
    )
}

export default Navbar
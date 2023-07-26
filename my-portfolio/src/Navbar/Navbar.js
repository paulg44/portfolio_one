// Component for Navbar
import "./Navbar.css"

function Navbar() {
    return (
    //  Navbar
    <nav id="navbar" className="navbar">
      <div class="nav-links">
        <a href="index.html" id="logo" className="logo"
          ><span>&lt;</span>PG<span>/&gt;</span></a>
        {/* <a href="blogpost.html" className="contact-button">Blogpost</a> */}
        <a href="contact.html" className="contact-button">Contact</a>
      </div>
    </nav>
    )
}

export default Navbar
// Component for Footer
import "./Footer.css";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="footer">
      {/* <!-- Link to Socials --> */}
      <div className="social-links">
        <a href="https://github.com/paulg44" target="_blank" rel="noreferrer">
          <FaGithub className="link" />
        </a>
        <a
          href="https://www.linkedin.com/in/paul-garton-697a87241/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="link" />
        </a>
      </div>
      <div className="tech-stacks">
        <FaReact className="faReact" />
        <FaNodeJs className="faNodeJs" />
        <FaHtml5 className="faHtml5" />
        <FaCss3 className="faCss3" />
      </div>
    </footer>
  );
}

export default Footer;

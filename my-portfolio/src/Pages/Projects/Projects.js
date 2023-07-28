// Component for Projects Page
import consensusIMG from "../../IMG/home_mobile.jpg"
import "./Projects.css"

function Projects() {
    return (
    <div class="projects">
    {/* <!-- Project on the left section --> */}
      <section class="left-section">
        <div class="left-container">
          <img src={consensusIMG} alt="mobile project main" />
          <h3>Consens<span>U</span>s
          <a href="https://consensusgpt.netlify.app/" target="_blank" rel="noreferrer">
            <i class="fa-solid fa-link"></i></a><a
            href="https://github.com/BC14-GPT-great-programming-team/Great-Programming-Team-Final-Project"
            target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
          </h3>

          <p>
            Our SoC final project. An App designed for mutliple users who can't
            decide what to do on a night out, this app saves time by coming to a
            decision for you, using rounds of voting. This project was all about
            teamwork, collaboration and honestly, fun!
          </p>
        </div>
      </section>
    
    
      {/* Middle Header */}
      <div class="middle-section">
        <h2>My Projects</h2>
      </div>
    </div>
 )
}

export default Projects
// Component for Projects Page
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import ProjectTemplate from '../../Components/ProjectTemplate/ProjectTemplate';
import consensusIMG from '../../IMG/home_mobile.jpg';
import dictionaryImg from '../../IMG/dictionary_app.jpg';
import homeMobile from '../../IMG/Screenshot (11)-PhotoRoom.png-PhotoRoom.png';
import socFrontend from '../../IMG/soc_frontend.jpg';
import lgGuitarsImg from '../../IMG/lg_guitars_home.jpg';
import './Projects.css';

function Projects() {
  const projectsData = [
    {
      title: 'LG Guitars',
      websiteLink: 'https://lgguitars.xyz/',
      githubLink: 'https://github.com/paulg44/LGGuitars',
      imgSrc: lgGuitarsImg,
      description:
        ' This is the first website I ever created and hosted myself. Using HTML, CSS & Javascript, this is a website showcasing my Dads homemade guitars. I learnt a lot of CSS through building this website and about responsive design. Since I have been at SoC I have refactored this site into a React App, and learnt a lot about props in the process.',
      className: 'individual-project',
    },
    {
      title: 'SoC Front End Project',
      websiteLink: '',
      githubLink: 'https://github.com/paulg44/frontend_project_week_SoC',
      imgSrc: socFrontend,
      description:
        'This project comprised of teamwork and collaboration. As a team of 4 we were given a brief to design and build a front end project. In this process we learnt about the AGILE process, scrum and generally working as a team, using branches in git, merging and resolving any insuing conflicts.',
      className: 'individual-project',
    },
    {
      title: 'Online Dictionary',
      websiteLink: 'https://paulg44.github.io/dictionary_app/',
      githubLink: 'https://github.com/paulg44/dictionary_app',
      imgSrc: dictionaryImg,
      description:
        'This basic online dictionary was a project involving APIs, learning how to request data, parse and sort that data, then attach it to the front end for a fully working online dictionary. I also used this project to do some unit & functional testing, which I enjoyed and will be implementing into projects both previous and going forward.',
      className: 'individual-project',
    },
    {
      title: 'My Mobile Project',
      websiteLink: 'https://paulg44.github.io/mobile-phone/',
      githubLink: 'https://github.com/paulg44/mobile-phone',
      imgSrc: homeMobile,
      imgClassName: '',
      description:
        '      A re-creation of my own mobile phone. What started as some practice whilst working away has turned into a full project. Using mainly HTML & CSS I have re-created my own phone, also using some Javascript. This has been great for honing my CSS skills, and I will also be adding as much functionality as possible. Ongoing.....',
      className: 'mobile-project',
    },
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const changeProject = step => {
    const nextIndex =
      (activeProjectIndex + step + projectsData.length) % projectsData.length;
    setActiveProjectIndex(nextIndex);
  };

  return (
    <div class="projects">
      {/* <!-- Project on the left section --> */}
      <section class="left-section">
        <div class="left-container">
          <img src={consensusIMG} alt="mobile project main" />
          <h3>
            Consens<span>U</span>s
            <a
              href="https://consensusgpt.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-solid fa-link"></i>
            </a>
            <a
              href="https://github.com/BC14-GPT-great-programming-team/Great-Programming-Team-Final-Project"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
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

      {/* Right Projects Section */}
      <div className="right-section">
        <div className="right-container">
          <div className="inner-project-container">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className={`project ${
                  index === activeProjectIndex ? 'active' : ''
                }`}
              >
                <ProjectTemplate {...project} />
              </div>
            ))}
            <button className="carousel-prev" onClick={() => changeProject(-1)}>
              <FaArrowLeft />
            </button>
            <button className="carousel-next" onClick={() => changeProject(1)}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

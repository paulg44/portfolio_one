// Component for Projects Page
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import ProjectTemplate from "../../Components/ProjectTemplate/ProjectTemplate";
import consensusIMG from "../../IMG/consensus.jpg";
import dictionaryImg from "../../IMG/dictionary_app.jpg";
import homeMobile from "../../IMG/Screenshot (11)-PhotoRoom.png-PhotoRoom.png";
import socFrontend from "../../IMG/soc_frontend.jpg";
import lgGuitarsImg from "../../IMG/lg_guitars_home.jpg";
import runningLogImg from "../../IMG/running_log_table.jpg";
import javascriptSawImg from "../../IMG/saw-img.jpg";
import ssj from "../../IMG/ssj_homepage.jpg";
import techTracker from "../../IMG/trackerHomescreen.png";
import hannahImg from "../../IMG/hannah_mob.jpg";
import scraper from "../../IMG/scraper.image.jpg";
import ivyGame from "../../IMG/ivys_game_homescreen.jpg";

import "./Projects.css";

function Projects() {
  const projectsData = [
    {
      title: "Shardlow St James",
      websiteLink: "https://ssjfc.netlify.app/",
      githubLink: "https://github.com/paulg44/shardlow_st_james",
      imgSrc: ssj,
      description:
        "A project I have taken on for my local amateur football club. Built using React, Bootstrap Node and Express. I have also integrated some real time data from the FA website and is fully tested using Cypress and React Testing Library, including mocks for the API. Currently building a web scraper to take a specific part of Instagram URL to update the news section automatically.",
      className: "individual-project",
    },
    {
      title: "Ivy's Drawing Game",
      websiteLink: "https://ivysgame.netlify.app/",
      githubLink: "https://github.com/paulg44/drawing_game",
      imgSrc: ivyGame,
      description:
        "This is a personal project using an idea my daughter had for a game about copying an image on a screen. I have ran with this and I am building out an educational game where a user draws on a canvas then an AI checks the likeness of the users drawing. Learnt so much in this so far, with how to work with canvas, images and how to incorporate an AI into a project just to name a few.",
    },
    {
      title: "Playwright Web Scraper",
      // websiteLink: "https://ssjfc.netlify.app/",
      githubLink: "https://github.com/paulg44/basic-web-scraper",
      imgSrc: scraper,
      description:
        "This Playwright web scraper was built to help me gain some knowledge into web scraping and data manipulation. It currently saves an array of href's on a particular page. I have also added a cron job to the GitHub Actions that runs once a day at 9pm. This tool is currently being built into my SSJ site to show the latest news from Instagram.",
      className: "individual-project",
    },
    {
      title: "ConsensUs",
      websiteLink: "https://consensusgpt.netlify.app/",
      githubLink:
        "https://github.com/BC14-GPT-great-programming-team/Great-Programming-Team-Final-Project",
      imgSrc: consensusIMG,
      description:
        "Our SoC final project. An App designed for multiple users who can't decide what to do on a night out, this app saves time by coming to a decision for you, using rounds of voting. This project was all about teamwork, collaboration and honestly, fun!",
      className: "individual-project",
    },
    {
      title: "LG Guitars",
      websiteLink: "https://lgguitars.netlify.app",
      githubLink: "https://github.com/paulg44/LGGuitars",
      imgSrc: lgGuitarsImg,
      description:
        " This is the first website I ever created and hosted myself. Using HTML, CSS & Javascript, this is a website showcasing my Dads homemade guitars. I learnt a lot of CSS through building this website and about responsive design. I have since refactored this site into a React App, fully tested using REact Testing Library and Cypress for E2E.",
      className: "individual-project",
    },
    {
      title: "JavScript Project Bundle",
      githubLink: "https://github.com/paulg44/javascript-project-bundle",
      websiteLink: "https://paulg44.github.io/javascript-project-bundle/",
      imgSrc: javascriptSawImg,
      description:
        "A bundle of JavaScript projects, all your classic favourites like a calculator, quiz and a horror style rock, paper, scissors game. Some with a unique twist and interactive CSS. Full test suite this time courtesy of Jest & Playwright.",
      className: "individual-project",
    },
    {
      title: "Local Tech Tracker",
      githubLink: "https://github.com/paulg44/applications",
      // websiteLink: "https://paulg44.github.io/javascript-project-bundle/",
      imgSrc: techTracker,
      description:
        "A small application to keep track of local companies that have junior roles available and their tech stack. This is a good way of being able to see if I need to learn something new. For example after my small research I am going to start digging into C#.",
      className: "individual-project",
    },
    {
      title: "SoC Front End Project",
      websiteLink: "https://github.com/paulg44/frontend_project_week_SoC",
      githubLink: "https://github.com/paulg44/frontend_project_week_SoC",
      imgSrc: socFrontend,
      description:
        "This project comprised of teamwork and collaboration. As a team of 4 we were given a brief to design and build a front end project. In this process we learnt about the AGILE process, scrum and generally working as a team, using branches in git, merging and resolving any resulting conflicts.",
      className: "individual-project",
    },
    {
      title: "Run Tracker",
      githubLink: "https://github.com/paulg44/running_log",
      imgSrc: runningLogImg,
      description:
        "This is a project built using Ruby on Rails. I used to track my runs through an excel spreadsheet and I had the thought that an application to do this would be a good idea. Utilising the MVC in Rails I have built a full CRUD application with authenticated sign up and search functions, using the devise and ransack gems respectively.",
      className: "individual-project",
    },

    {
      title: "Online Dictionary",
      websiteLink: "https://paulg44.github.io/dictionary_app/",
      githubLink: "https://github.com/paulg44/dictionary_app",
      imgSrc: dictionaryImg,
      description:
        "This basic online dictionary was a project involving APIs, learning how to request data, parse and sort that data, then attach it to the front end for a fully working online dictionary. I also used this project to do some unit & functional testing, which I enjoyed and will be implementing into projects both previous and going forward.",
      className: "individual-project",
    },
    {
      title: "My Mobile Project",
      websiteLink: "https://paulg44.github.io/mobile-phone/",
      githubLink: "https://github.com/paulg44/mobile-phone",
      imgSrc: homeMobile,

      description:
        "      A re-creation of my own mobile phone. What started as some practice whilst working away has turned into a full project. Using mainly HTML & CSS I have re-created my own phone, also using some Javascript. This has been great for honing my CSS skills, and I will also be adding as much functionality as possible. Ongoing.....",
      className: "mobile-project",
    },
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const changeProject = (step) => {
    const nextIndex =
      (activeProjectIndex + step + projectsData.length) % projectsData.length;
    setActiveProjectIndex(nextIndex);
  };

  return (
    <div className="projects">
      {/* <!-- Project on the left section --> */}
      <section className="left-section">
        <div className="left-container">
          <img src={hannahImg} alt="mobile project main" />
          <h3>
            Hannah <span>Jane</span> Garton
            <a
              href="https://hannahjanegarton.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLink className="leftIcon" />
            </a>
            <a
              href="https://github.com/paulg44/hannah-art-website"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="leftIcon" />
            </a>
          </h3>

          <p>
            A website portfolio/shop for my wife's art. Built using React, Node
            & Express and Stripe for payment integration. Currently under
            construction whilst we sort out the products to be sold. Server
            deployed using Render so it can take a little while to load the
            products.
          </p>
        </div>
      </section>

      {/* Middle Header */}
      <div className="middle-section">
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
                  index === activeProjectIndex ? "active" : ""
                }`}
                style={{
                  zIndex: index === activeProjectIndex ? 1 : 0,
                  pointerEvents: index === activeProjectIndex ? "auto" : "none",
                }}
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

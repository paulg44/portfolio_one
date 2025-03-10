// Component for Projects Page
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import projectsData from "../../data/projects.json";
import "./Projects.css";

function Projects() {
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
          {/* <img src={hannahImg} alt="mobile project main" /> */}
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
            {projectsData.projects.map((project, index) => (
              <div
                key={index}
                // className={`project ${
                //   index === activeProjectIndex ? "active" : ""
                // }`}
                // style={{
                //   zIndex: index === activeProjectIndex ? 1 : 0,
                //   pointerEvents: index === activeProjectIndex ? "auto" : "none",
                // }}
              >
                <h3>
                  {project.title}
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLink className="rightIcon" />
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <FaGithub className="rightIcon" />
                  </a>
                </h3>

                <img src={project.imgSrc} alt={project.imgAlt} />
                {/* <p>{project.description}</p> */}
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

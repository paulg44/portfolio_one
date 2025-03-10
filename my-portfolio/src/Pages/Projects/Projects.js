// Component for Projects Page
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import projectsData from "../../data/projects.json";
import "./Projects.css";

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const totalPages = Math.ceil(projectsData.projects.length / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;
  const selectedProjects = projectsData.projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.min(prev - 1, 1));

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
            {selectedProjects.map((project) => (
              <div
                key={project.id}
                className={`projectCard card${project.styling}`}
              >
                <h3>{project.title}</h3>

                <img src={project.imgSrc} alt={project.imgAlt} />
                <div className="projectIcons">
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
                </div>
              </div>
            ))}
            {/* I may need this for mobile view */}
            <button
              className="carousel-prev"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <FaArrowLeft />
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="carousel-next"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

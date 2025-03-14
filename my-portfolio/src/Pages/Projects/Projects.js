// Component for Projects Page
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import projectsData from "../../data/projects.json";
import "./Projects.css";
import hannahImg from "../../IMG/hannah_mob.jpg";

function Projects() {
  const [openProjectId, setOpenProjectId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const closePopUp = () => setOpenProjectId(null);
  const togglePopUp = (projectId) =>
    setOpenProjectId(openProjectId === projectId ? null : projectId);

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
            {selectedProjects.map((project) => (
              <div
                key={project.id}
                className={`projectCard card${project.styling}`}
              >
                <img src={project.imgSrc} alt={project.imgAlt} loading="lazy" />
                <div
                  className="projectMetadata"
                  style={{
                    backgroundColor: `${project.bgColor}`,
                    color: `${project.color}`,
                  }}
                >
                  <h3>{project.title}</h3>
                  <button
                    style={{ color: `${project.color}` }}
                    className="projectMetadataBtn"
                    onClick={() => togglePopUp(project.id)}
                  >
                    Learn More
                  </button>
                  <div className="projectIcons">
                    {/* If truthy the link will render fro projects that have one */}
                    {project.websiteLink && (
                      <a
                        style={{ color: project.color }}
                        href={project.websiteLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLink className="rightIcon" />
                      </a>
                    )}

                    <a
                      style={{ color: project.color }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub className="rightIcon" />
                    </a>
                  </div>

                  {/* Pop Up */}
                  {openProjectId === project.id && (
                    <>
                      <div
                        className="backgroundOverlay"
                        onClick={closePopUp}
                      ></div>
                      <div
                        className={`projectPopUpGallery ${
                          openProjectId === project.id ? "open" : ""
                        }`}
                        style={{ backgroundColor: project.bgColor }}
                      >
                        <button className="close" onClick={closePopUp}>
                          &times;
                        </button>
                        <p>{project.description}</p>
                        <div className="popUpImageContainer">
                          {project.popUpGallery.map((projectImg, index) => (
                            <div className="imagePopUpCard" key={index}>
                              <img src={projectImg.img} alt={projectImg.alt} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="scrollBtns">
            <button
              className="prevBtn"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <FaArrowLeft />
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="nextBtn"
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

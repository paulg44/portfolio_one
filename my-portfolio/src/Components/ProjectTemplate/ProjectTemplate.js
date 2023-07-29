// Component for Carousel Projects
import './ProjectTemplate.css';
import { FaLink } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function ProjectTemplate({
  title,
  websiteLink,
  githubLink,
  imgAlt,
  imgSrc,
  description,
  className,
  imgClassName,
}) {
  return (
    <div className="project active">
      <div className={className}>
        <h3>
          {title}
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            <FaLink className="icons" />
          </a>
          <a
            className="icons"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </h3>

        <img src={imgSrc} alt={imgAlt} className={imgClassName} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectTemplate;

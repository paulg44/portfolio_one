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
          <a href={websiteLink} target="_blank" rel="noreferrer">
            <FaLink className="rightIcon" />
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <FaGithub className="rightIcon" />
          </a>
        </h3>

        <img src={imgSrc} alt={imgAlt} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectTemplate;

import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { ImLink } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import { CgArrowTopRightR } from "react-icons/cg";
import projects from "../data/projects";

interface ProjectPopupProps {
  index: number;
  popupDisplayed: boolean;
  mediaWidth: number;
  togglePopup: (index: number, active: boolean) => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({
  popupDisplayed,
  index,
  mediaWidth,
  togglePopup,
}) => {
  const project = projects[index];
  return (
    <div className={popupDisplayed ? "projectPopup active" : "projectPopup"}>
      <div className="projectPopup__container">
        <div
          className="projectPopup__close"
          onClick={() => {
            togglePopup(0, false);
          }}
        >
          <IoIosArrowBack />
        </div>
        <div className="projectPopup__content">
          <h2 className="projectPopup__title">
            {project.title}
            <a
              className="projectPopup__titleLink"
              href={project.links.live}
              target="_blank"
              rel="-noopener noreferrer"
              aria-label="Move to live website"
            >
              <ImLink />
            </a>
          </h2>
          <div className="projectPopup__stack">
            {project.stack.map((stack, stackIdx) => (
              <span key={stackIdx}>{stack}</span>
            ))}
          </div>
          <p className="projectPopup__description">{project.description}</p>
          <div className="projectPopup__image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
        <div className="projectPopup__links">
          <a
            href={project.links.live}
            target="_blank"
            rel="-noopener noreferrer"
          >
            <button>View Live {mediaWidth > 370 && (<CgArrowTopRightR />)}</button>
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="-noopener noreferrer"
          >
            <button>View Source {mediaWidth > 370 && (<FiGithub />)}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;

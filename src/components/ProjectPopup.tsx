import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { ImLink } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import { CgArrowTopRightR } from "react-icons/cg";
import projects from "../data/projects";
import "../styles/ProjectPopup.css";

interface ProjectPopupProps {
  index: number;
  popupDisplayed: boolean;
  togglePopup: (index: number, active: boolean) => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({
  popupDisplayed,
  index,
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
              rel="noreferrer-noopener"
            >
              <ImLink />
            </a>
          </h2>
          <div className="projectPopup__stack">
            {project.stack.map((stack) => (
              <span>{stack}</span>
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
            rel="noreferrer-noopener"
          >
            <button>View Live <CgArrowTopRightR /></button>
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer-noopener"
          >
            <button>View Source <FiGithub /></button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;

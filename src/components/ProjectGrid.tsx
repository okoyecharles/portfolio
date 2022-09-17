import React from "react";
import "../styles/ProjectGrid.css";
import { Project } from "../data/projects";
import { IoIosArrowForward } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

interface ProjectGridProps {
  projects: Project[];
  mediaWidth: number;
  togglePopup: (index: number, active: boolean) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  mediaWidth,
  togglePopup,
}) => {
  return (
    <ul className="projectGrid">
      {projects.map((project, projectIdx) => (
        <Fade triggerOnce key={project.index}>
          <li
            
            className="projectCard"
            style={
              mediaWidth > 700 ? { background: `url(${project.image})` } : {}
            }
          >
            {mediaWidth <= 700 && (
              <div className="projectCard__image">
                <img src={project.image} alt={project.title} />
              </div>
            )}
            <div className="projectCard__title">
              <h3>{project.title}</h3>
              <button
                className="projectCard__arrow"
                onClick={() => {
                  togglePopup(projectIdx, true);
                }}
              >
                <IoIosArrowForward />
              </button>
            </div>
            <div className="projectCard__note">{project.note}</div>
          </li>
        </Fade>
      ))}
    </ul>
  );
};

export default ProjectGrid;

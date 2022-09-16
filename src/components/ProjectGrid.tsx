import React from "react";
import "../styles/ProjectGrid.css";
import { Project } from "../data/projects";
import { IoIosArrowForward } from "react-icons/io";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

interface ProjectGridProps {
  projects: Project[];
  mediaWidth: number;
  togglePopup: (index: number, active: boolean) => void;
}

const slideUp = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  mediaWidth,
  togglePopup,
}) => {
  return (
    <ul className="projectGrid">
        {projects.map((project, projectIdx) => (
          <Reveal triggerOnce keyframes={slideUp}>
          <li
            key={project.index}
            className="projectCard"
            style={{ background: `url(${project.image})` }}
          >
            {mediaWidth <= 700 && (
              <img src={project.image} alt={project.title} />
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
          </Reveal>
        ))}
    </ul>
  );
};

export default ProjectGrid;

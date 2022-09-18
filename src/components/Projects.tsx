import React, { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import projects from "../data/projects";
import ProjectPopup from "./ProjectPopup";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const slideUp = keyframes`
  from {
    transform: translateY(2em);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

interface ProjectsProps {
  mediaWidth: number;
}

const Projects: React.FC<ProjectsProps> = ({ mediaWidth }) => {
  const [popupIndex, setPopupIndex] = useState<number>(0);
  const [popupDisplayed, setPopupDisplayed] = useState<boolean>(false);

  const togglePopup = (index: number, active: boolean) => {
    setPopupIndex(index);
    setPopupDisplayed(active);
  };

  return (
    <section className="projects">
      <div className="projects__container">
        <h2 className="projects__header">Projects</h2>
        <Reveal triggerOnce fraction={1} delay={100} keyframes={slideUp}>
          <div className="projects__coa">
            I'm a <strong>creative</strong> developer who loves to work on{" "}
            <strong>excellent and appealing websites</strong> with a passion for
            UI/UX... always yielding high returns on what is invested. Below
            showcases some of my latest projects.
          </div>
        </Reveal>
        <ProjectGrid
          projects={projects}
          mediaWidth={mediaWidth}
          togglePopup={togglePopup}
        />
        <ProjectPopup
          popupDisplayed={popupDisplayed}
          mediaWidth={mediaWidth}
          index={popupIndex}
          togglePopup={togglePopup}
        />
      </div>
    </section>
  );
};

export default Projects;

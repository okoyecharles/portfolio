import React, { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import "../styles/Projects.css";
import projects from "../data/projects";
import ProjectPopup from "./ProjectPopup";
import { Fade } from "react-awesome-reveal";

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
        <Fade triggerOnce fraction={1} delay={100}>
          <div className="projects__coa">
            I'm a <strong>creative</strong> developer who loves to work on{" "}
            <strong>excellent and appealing websites</strong> with a passion for
            UI/UX... always yielding high returns on what is invested. Below
            showcases some of my latest projects.
          </div>
        </Fade>
        <ProjectGrid
          projects={projects}
          mediaWidth={mediaWidth}
          togglePopup={togglePopup}
        />
        <ProjectPopup
          popupDisplayed={popupDisplayed}
          index={popupIndex}
          togglePopup={togglePopup}
        />
      </div>
    </section>
  );
};

export default Projects;

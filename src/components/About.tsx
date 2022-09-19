import { keyframes } from "@emotion/react";
import React from "react";
import { Reveal } from "react-awesome-reveal";
import AboutGrid from "./AboutGrid";
import AboutSkills from "./AboutSkills";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(2em);
  },
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const About: React.FC = () => {
  return (
    <section className="about">
      <a id="about"></a>
      <div className="about__container">
        <h2 className="about__header">About</h2>
        <div className="about__coa">
          <Reveal keyframes={slideUp} triggerOnce fraction={1}>
            <span>
              I'm a <strong>self-motivated, and dedicated</strong> developer
              with experience creating{" "}
              <strong>unique, high-end, and innovative</strong> products.
            </span>
            <span>Here's a little bit more about Okoye Charles...</span>
          </Reveal>
        </div>
        <AboutGrid />
        <AboutSkills />
      </div>
    </section>
  );
};

export default About;

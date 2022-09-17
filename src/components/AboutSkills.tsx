import React from "react";
import "../styles/AboutSkills.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiPostgresql,
  SiRuby,
  SiNextdotjs,
} from "react-icons/si";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(2em);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutSkills: React.FC = () => {
  return (
    <div className="aboutSkills">
      <div className="aboutLanguages">
        <h2>Languages & Frameworks</h2>
        <Reveal
          triggerOnce
          fraction={1}
          cascade
          keyframes={slideUp}
          damping={0.125}
        >
          <ul className="aboutLanguages__grid">
            <li>
              <SiHtml5 />
              <span>HTML5</span>
            </li>
            <li>
              <SiCss3 />
              <span>CSS3</span>
            </li>
            <li>
              <SiJavascript />
              <span>JAVASCRIPT</span>
            </li>
            <li>
              <SiReact />
              <span>React</span>
            </li>
            <li>
              <SiTypescript />
              <span>Typescript</span>
            </li>
            <li>
              <SiRedux />
              <span>Redux</span>
            </li>
            <li>
              <SiFirebase />
              <span>Firebase</span>
            </li>
            <li>
              <SiPostgresql />
              <span>PostgresSQL</span>
            </li>
            <li>
              <SiRuby />
              <span>Ruby</span>
            </li>
            <li>
              <SiNextdotjs />
              <span>Nextjs</span>
            </li>
          </ul>
        </Reveal>
      </div>
      <div className="aboutPerks">
        <h2>Skills</h2>
        <Reveal
          triggerOnce
          fraction={1}
          cascade
          keyframes={slideUp}
          damping={0.1}
        >
          <ul className="aboutPerks__grid">
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Positivity</li>
            <li>Critical Thinking</li>
            <li>Leadership</li>
          </ul>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutSkills;

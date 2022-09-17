import React, { useState } from "react";
import "../styles/Home.css";
import OkoyeCharles from "../images/personal/OkoyeCharles.png";
import OkoyeCharlesSm from "../images/personal/OkoyeCharles-sm.png";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(3em);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInL = keyframes`
  from {transform: translateX(-5em)}
  to {transform: translateX(0)}
`;

interface HomeProps {
  mediaWidth: number;
}

const Home: React.FC<HomeProps> = ({ mediaWidth }) => {
  return (
    <section className="home">
      <div className="home__container">
        {mediaWidth > 800 ? (
          <div className="home__content">
            <Reveal triggerOnce keyframes={slideIn} cascade damping={0.25}>
              <h1 className="home__header">OKOYE CHARLES</h1>
              <div className="home__description">
                My Name is Okoye Charles and I'm a software developer! I can
                help you build a product , feature or website Look through some
                of my work and experience! If you like what you see and need
                help on a project, I am available for hire.
              </div>
              <a href="#CONTACT">
                <button type="button" className="home__button">
                  CONTACT ME
                </button>
              </a>
            </Reveal>
          </div>
        ) : (
          <div className="home__content">
            <h1 className="home__header">OKOYE CHARLES</h1>
            <div className="home__description">
              My Name is Okoye Charles and I'm a software developer! I can help
              you build a product , feature or website Look through some of my
              work and experience! If you like what you see and need help on a
              project, I am available for hire.
            </div>
            <a href="#CONTACT">
              <button type="button" className="home__button">
                CONTACT ME
              </button>
            </a>
          </div>
        )}

        {mediaWidth > 800 ? (
          <div className="home__image">
            <Reveal triggerOnce keyframes={slideInL} damping={0.25}>
              <img
                src={OkoyeCharles}
                alt="Okoye Charles"
              />
            </Reveal>
          </div>
        ) : (
          <div className="home__image">
            <img src={OkoyeCharlesSm} alt="Okoye Charles" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;

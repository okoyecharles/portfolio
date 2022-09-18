import { keyframes } from "@emotion/react";
import React from "react";
import { Fade, Reveal, Slide } from "react-awesome-reveal";
import aboutCards from "../data/about";

const slideRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2em);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const slideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(2em);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AboutGrid: React.FC = () => {
  return (
    <div className="aboutGrid">
      <div className="aboutGrid__container">
        {aboutCards.map((card, cardIdx) => (
          <div className="aboutCard">
            <Fade triggerOnce fraction={0.5}>
              <div className="aboutCard__image">
                <img
                  src={card.image}
                  alt={card.title}
                  width={card.imgDims.width}
                  height={card.imgDims.height}
                />
              </div>
            </Fade>
            <div className="aboutCard__content">
              <Reveal
                triggerOnce
                damping={0.125}
                fraction={1}
                cascade
                keyframes={cardIdx % 2 === 0 ? slideLeft : slideRight}
              >
                <h3 className="aboutCard__title">{card.title}</h3>
                <div
                  className="aboutCard__description"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                >
                  {}
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutGrid;

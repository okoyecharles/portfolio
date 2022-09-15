import React from "react";
import '../styles/Home.css';
import OkoyeCharles from "../images/OkoyeCharles.png";

const Home: React.FC = () => {
  return (
      <section className="home">
      <div className="home__container">
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

        <div className="home__image">
          <img src={OkoyeCharles} alt="Okoye Charles" />
        </div>
      </div>
    </section>
  );
};

export default Home;

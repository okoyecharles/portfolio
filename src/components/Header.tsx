import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header__logo" onClick={() => navigate('/')}>OKOYE CHARLES</div>

      <nav className="header__nav" aria-roledescription="navigation">
        <ul className="header__navLinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

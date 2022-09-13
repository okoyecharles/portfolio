import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import "../styles/Header.css";

interface HeaderProps {
  mediaWidth: number;
}

const Header: React.FC<HeaderProps> = ({ mediaWidth }) => {
  const navigate = useNavigate();
  const [mobileNavActive, setMobileVavActive] = useState<boolean>(false);
  return (
    <header className="header">
      <div className="header__logo" onClick={() => navigate("/")}>
        OKOYE CHARLES
      </div>

      {mediaWidth <= 700 && (
        <IoIosMenu
          className="header__navToggle"
          onClick={() => {
            setMobileVavActive(true);
          }}
        />
      )}

      <nav className={mobileNavActive ? "header__nav active" : "header__nav"} aria-roledescription="navigation">
        {mediaWidth <= 700 && (
          <IoIosClose
            className="header__navToggle header__navToggle--close"
            onClick={() => {
              setMobileVavActive(false);
            }}
          />
        )}
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

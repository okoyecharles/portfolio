import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import "../styles/Header.css";
import { detect } from "detect-browser";

interface HeaderProps {
  mediaWidth: number;
}

const headerIntersectStyle: React.CSSProperties = {
  boxShadow: "0 0 0.25em rgba(0, 0, 0, 0.3)",
  position: "sticky",
  top: "-0.01px",
};

const Header: React.FC<HeaderProps> = ({ mediaWidth }) => {
  const navigate = useNavigate();
  const [mobileNavActive, setMobileVavActive] = useState<boolean>(false);

  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const browser = detect();

  useEffect(() => {
    if (browser?.name === 'safari') {
      setIsSticky(true);
      return;
    };
    const observer = new IntersectionObserver((entries) => {
      const [ entry ] = entries
      setIsSticky(entry.intersectionRatio < 1)
    }, {threshold: 1})

    if (headerRef.current) observer.observe(headerRef.current);
  }, [headerRef])

  return (
    <header className="header" style={isSticky ? headerIntersectStyle : {}} ref={headerRef}>
      <div className="header__container">
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

        <nav
          className={mobileNavActive ? "header__nav active" : "header__nav"}
          aria-roledescription="navigation"
        >
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
              <a href="#HOME">Home</a>
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
      </div>
    </header>
  );
};

export default Header;

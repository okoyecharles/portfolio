import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import LogoFull from "../images/personal/logo-full.webp";
import Logo from "../images/personal/logo.webp";
import { Fade } from "react-awesome-reveal";
import { FaAngellist, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

interface HeaderProps {
  mediaWidth: number;
}

const headerIntersectStyle: React.CSSProperties = {
  boxShadow: "0 0 0.25em rgba(0, 45, 72, 0.3)",
  position: "sticky",
  top: "-0.5px",
};

const Header: React.FC<HeaderProps> = ({ mediaWidth }) => {
  const navigate = useNavigate();
  const [mobileNavActive, setMobileVavActive] = useState<boolean>(false);

  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const scrollToTop = (event: React.SyntheticEvent) => {
    event.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setMobileVavActive(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsSticky(entry.intersectionRatio < 1);
      },
      { threshold: 1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);

    return function () {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <header
      className="header"
      style={isSticky ? headerIntersectStyle : {}}
      ref={headerRef}
    >
      <div className="header__container">
        <div className="header__logo" onClick={() => navigate("/")}>
          <Fade triggerOnce>
            <a href="" onClick={scrollToTop}>
              <img
                src={mediaWidth > 700 ? LogoFull : Logo}
                width={mediaWidth > 700 ? "1000" : "974"}
                height={mediaWidth > 700 ? "290" : "586"}
                alt="Okoye Charles"
              />
            </a>
          </Fade>
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
              <a href="" onClick={scrollToTop}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  setMobileVavActive(false);
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => {
                  setMobileVavActive(false);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  setMobileVavActive(false);
                }}
              >
                Contact
              </a>
            </li>
            {mediaWidth <= 700 && (
              <li className="header__socialBar">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/OkoyeCharles_"
                  onClick={() => {
                    setMobileVavActive(false);
                  }}
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com/OkoyeCharles"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setMobileVavActive(false);
                  }}
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/charles-k-okoye/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setMobileVavActive(false);
                  }}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://angel.co/u/charles-k-okoye"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setMobileVavActive(false);
                  }}
                >
                  <FaAngellist />
                </a>
                <a
                  href="mailto:okoyecharles509@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setMobileVavActive(false);
                  }}
                >
                  <SiGmail />
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

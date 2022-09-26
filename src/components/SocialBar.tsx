import React from "react";
import { FaAngellist, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialBar: React.FC = () => {
  return (
    <nav className="socialBar" aria-roledescription="social navigation">
      <ul className="socialBar__links">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/OkoyeCharles_"
            >
              <FaTwitter />
              <div>
                <span>Twitter</span>
              </div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/OkoyeCharles"
            >
              <FaGithub />
              <div>
                <span>Github</span>
              </div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/charles-k-okoye/"
            >
              <FaLinkedinIn />
              <div>
                <span>LinkedIn</span>
              </div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://angel.co/u/charles-k-okoye"
            >
              <FaAngellist />
              <div>
                <span>AngelList</span>
              </div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:okoyecharles509@gmail.com"
            >
              <SiGmail />
              <div>
                <span>Gmail</span>
              </div>
            </a>
          </li>
      </ul>
    </nav>
  );
};

export default SocialBar;

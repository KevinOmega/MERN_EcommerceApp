import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer bg-dark ">
      <div className="description">
        <p>
          If you want more information about the website please click{" "}
          <Link className="link" to={"/about"}>
            here.
          </Link>
        </p>
      </div>
      <div className="social-media">
        <ul>
          <li>
            <a href="https://github.com/KevinOmega">
              <i>
                <AiFillGithub />
              </i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kevin-omega-94a3a4226/">
              <i>
                <AiFillLinkedin />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

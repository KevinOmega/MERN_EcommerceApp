import React, { useState } from "react";

import { DiJavascript, DiReact, DiMongodb } from "react-icons/di";
import {
  SiRedux,
  SiExpress,
  SiSass,
  SiTypescript,
  SiD3Dotjs,
  SiPassport,
  SiMonster,
} from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io";

const frontEndSkills = [
  {
    id: 1,
    name: "Javascript",
    icon: <DiJavascript />,
    color: "#E4A11B",
  },
  {
    id: 2,
    name: "Sass",
    icon: <SiSass />,
    color: "#DC4C64",
  },
  {
    id: 3,
    name: "React",
    icon: <DiReact />,
    color: "#3B71CA",
  },
  {
    id: 4,
    name: "Redux",
    icon: <SiRedux />,
    color: "#fc12f1",
  },
  {
    id: 5,
    name: "Bootstrap",
    icon: <BsBootstrapFill />,
    color: "#9c32f1",
  },
  {
    id: 6,
    name: "Typescript",
    icon: <SiTypescript />,
    color: "#3322ff",
  },
  {
    id: 7,
    name: "D3",
    icon: <SiD3Dotjs />,
    color: "#ffa011",
  },
];

const backEndSkills = [
  {
    id: 1,
    name: "Node js",
    icon: <IoLogoNodejs />,
    color: "#1CAC78",
  },
  {
    id: 2,
    name: "Express js",
    icon: <SiExpress />,
    color: "#3FFF00",
  },
  {
    id: 3,
    name: "MongoDB",
    icon: <DiMongodb />,
    color: "#1B4D3E",
  },
  {
    id: 4,
    name: "Passport",
    icon: <SiPassport />,
    color: "#315f90",
  },
  {
    id: 5,
    name: "Mongoose",
    icon: <SiMonster />,
    color: "#f23333",
  },
];

const Developer = () => {
  const [skills, setSkills] = useState({
    type: "front",
    content: frontEndSkills,
  });

  return (
    <div className="about-developer" id="developer-section">
      <div className="about-developer-header">
        <h1>About the Developer</h1>
      </div>
      <p>
        Hi, I'm Kevin and I'm a Full Stack Developer, if you are interested in
        my services please don't doubt to visit my upwork profile{" "}
        <a href="https://www.upwork.com/freelancers/~01f1c35f1d3d2fd2a5" target="_blank" rel="noreferrer">
          here
        </a>
      </p>
      <div className="skills">
        <div className="choice-menu">
          <button
            className={`btn ${
              skills.type === "front" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() =>
              setSkills({ type: "front", content: frontEndSkills })
            }
          >
            Front-End
          </button>
          <button
            className={`btn ${
              skills.type === "back" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setSkills({ type: "back", content: backEndSkills })}
          >
            Back-End
          </button>
        </div>
        <div className="skills-center">
          <ul>
            {skills.content.map((item, index) => (
              <li
                key={item.id}
                style={{
                  "--clr": item.color,
                  "--i": skills.content.length - index,
                }}
                className={item.name.toLowerCase()}
              >
                <span>{item.icon}</span>
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Developer;

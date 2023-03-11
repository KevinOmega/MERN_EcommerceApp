import React from "react";
import Developer from "./Developer";
import Website from "./Website";

const About = () => {
  return (
    <div className="about-section">
      <Website />
      <Developer />
    </div>
  );
};

export default About;

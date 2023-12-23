import React from "react";
import AboutDetails from "../components/about/AboutDetails";
const About = ({ about1, about2 }) => {
  return (
    <div className="py-4 mt-4 mt-md-0">
      <div className="container">
        <AboutDetails data={about1} isReversed={false} />
        <AboutDetails data={about2} isReversed={true} />
      </div>
    </div>
  );
};

export default About;

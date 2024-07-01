import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          Building Dreams,
          <br /> Brick by Brick
        </h1>
        <p>
          Since 2017, we've grown from supplying Electrical Materials and Steel
          to contractors to seizing opportunities to build our own projects and
          create jobs for our fellow Filipinos. We're committed to building the
          backbone of the economy, one project at a time.
        </p>
        <Link
          to="projects"
          smooth={true}
          offset={-270}
          duration={800}
          className="btn"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
};

export default Hero;

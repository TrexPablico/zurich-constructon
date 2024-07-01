import React from "react";
import "./About.css";
import about1 from "../../assets/About/about1.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about1} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Mission</h2>
        <p>
          To empower the nation’s infrastructure development by delivering
          exceptional quality and reliable materials, while nurturing economic
          growth and providing sustainable job opportunities for our fellow
          countrymen. We are committed to excellence, innovation and integrity
          in every project we undertake, ensuring the utmost satisfaction of our
          clients.
        </p>
        <h2>Vision</h2>
        <p>
          To be the premier provider of quality infrastructure projects in the
          Philippines recognized for our unwavering dedication to craftsmanship,
          efficiency and social responsibility. We envision a future where our
          projects stand as testaments to progress, enriching communities and
          driving sustainable development nationwide. Through our passion for
          excellence and collaborative spirit, we aim to leave a lasting legacy
          of success and prosperity for generations to come.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./Services.css";
import services1 from "../../assets/Services/services1.jpg";
import services2 from "../../assets/Services/services2.jpg";
import services3 from "../../assets/Services/services3.jpg";
import services4 from "../../assets/Services/services4.jpg";
import services5 from "../../assets/Services/services5.jpg";
import services6 from "../../assets/Services/services6.jpg";
import icon1 from "../../assets/Services/icon1.png";
import icon2 from "../../assets/Services/icon2.png";
import icon3 from "../../assets/Services/icon3.png";
import icon4 from "../../assets/Services/icon4.png";
import icon5 from "../../assets/Services/icon5.png";
import icon6 from "../../assets/Services/icon6.png";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="service">
          <img src={services1} alt="" />
          <div className="caption">
            <img src={icon1} alt="" />
            <p>Design & Build</p>
          </div>
        </div>
        <div className="service">
          <img src={services2} alt="" />
          <div className="caption">
            <img src={icon2} alt="" />
            <p>Structural Works</p>
          </div>
        </div>
        <div className="service">
          <img src={services3} alt="" />
          <div className="caption">
            <img src={icon3} alt="" />
            <p>Civil Works</p>
          </div>
        </div>
      </div>
      <div className="services services-bot">
        <div className="service">
          <img src={services4} alt="" />
          <div className="caption">
            <img src={icon4} alt="" />
            <p>Electrical Works</p>
          </div>
        </div>
        <div className="service">
          <img src={services5} alt="" />
          <div className="caption">
            <img src={icon5} alt="" />
            <p>Plumbing Works</p>
          </div>
        </div>
        <div className="service">
          <img src={services6} alt="" />
          <div className="caption">
            <img src={icon6} alt="" />
            <p>Architectural Works</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

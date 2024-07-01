import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo/logo.png";
import { Link } from "react-scroll";
import menu from "../../assets/Navbar/menu.png";
import exit from "../../assets/Navbar/exit.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 800 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            onClick={toggleMenu}
            to="hero"
            smooth={true}
            offset={0}
            duration={800}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleMenu}
            to="about"
            smooth={true}
            offset={-200}
            duration={800}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleMenu}
            to="projects"
            smooth={true}
            offset={-270}
            duration={800}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleMenu}
            to="services"
            smooth={true}
            offset={-270}
            duration={800}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleMenu}
            to="contact"
            smooth={true}
            offset={0}
            duration={800}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;

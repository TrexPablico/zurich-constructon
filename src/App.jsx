import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Title subTitle="What We Offer" title="SERVICES" />
        <Services />
        <Title subTitle="Gallery" title="PROJECTS" />
        <Projects />
        <Title subTitle="Get in Touch" title="CONTACT US" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

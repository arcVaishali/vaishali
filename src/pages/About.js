import React from "react";
import Hero from "../components/About/Hero";
import Slider from "../components/About/Slider";
import Experience from "../components/About/Experience";
import Achievement from "../components/About/Achievement";
import FAQ from "../components/About/FAQ";
import Contact from "../components/Home/Contact";

const About = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <Experience />
      <Achievement />
      <FAQ />
      <Contact />
    </div>
  );
};

export default About;

import React from "react";
import Hero from "../components/About/Hero";
import Slider from "../components/About/Slider";
import Experience from "../components/About/Experience";
import Achievement from "../components/About/Achievement";
import FAQ from "../components/About/FAQ";
import Contact from "../components/Home/Contact";
import Education from "../components/About/Education";

const About = () => {
  return (
    <div>
      <Hero />
      <Education/>
      <Experience />
      <Achievement />
      <Slider />
      {/* <FAQ /> */}
      <Contact />
    </div>
  );
};

export default About;

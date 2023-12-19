import React from "react";
import Hero from "../components/Home/Hero";
import Stack from "../components/Home/Stack";
import Project from "../components/Home/Project";
import Services from "../components/Home/Services";
import Recommendation from "../components/Home/Recommendation";
import Blog from "../components/Home/Blog";
import Contact from "../components/Home/Contact";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../components/Home/Navbar";

const Home = () => {
  return (
    <Parallax pages={7}>
      <ParallaxLayer offset={1} speed={1} factor={1}>
        <Navbar/>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1} factor={1}>
        <Hero/>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.2} factor={1}>
        <Stack />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.25} factor={1}>
        <Project />
      </ParallaxLayer>
      {/* <ParallaxLayer offset={2} speed={1} factor={1}>
        <Services />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.5} factor={1}>
        <Recommendation />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.5} factor={1}>
        <Blog />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.25} factor={1}>
        <Contact />
      </ParallaxLayer> */}
    </Parallax>
  );
};

export default Home;

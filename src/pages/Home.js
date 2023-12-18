import React from "react";
import Hero from "../components/Home/Hero";
import Stack from "../components/Home/Stack";
import Project from "../components/Home/Project";
import Services from "../components/Home/Services";
import Recommendation from "../components/Home/Recommendation";
import Blog from "../components/Home/Blog";
import Contact from "../components/Home/Contact";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {
  return (
    <Parallax pages={20}>
      <ParallaxLayer offset={2} speed={2} factor={8}>
        <Hero />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.2} factor={8}>
        <Stack />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.25} factor={8}>
        <Project />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1} factor={8}>
        <Services />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.5} factor={8}>
        <Recommendation />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.5} factor={8}>
        <Blog />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.25} factor={8}>
        <Contact />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;

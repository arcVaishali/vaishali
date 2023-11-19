import React from "react";
import Hero from "../components/Home/Hero";
import Stack from "../components/Home/Stack";
import Project from "../components/Home/Project";
import Services from "../components/Home/Services";
import Recommendation from "../components/Home/Recommendation";
import Blog from "../components/Home/Blog";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Stack />
      <Project />
      <Services />
      <Recommendation />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;

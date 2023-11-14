import React from "react";
import Hero from "../components/Hero";
import Stack from "../components/Stack";
import Project from "../components/Project";
import Services from "../components/Services";
import Recommendation from "../components/Recommendation";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Stack />
      <Project/>
      <Services/>
      <Recommendation/>
      <Blog/>
      <Contact/>
    </>
  );
};

export default Home;

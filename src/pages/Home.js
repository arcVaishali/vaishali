import React from "react";
import Hero from "../components/Hero";
import Stack from "../components/Stack";
import Project from "../components/Project";
import Services from "../components/Services";
import Recommendation from "../components/Recommendation";

const Home = () => {
  return (
    <>
      <Hero />
      <Stack />
      <Project/>
      <Services/>
      <Recommendation/>
    </>
  );
};

export default Home;

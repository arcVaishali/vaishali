import React from "react";
import Hero from "../components/Home/Hero";
import Stack from "../components/Home/Stack";
import Project from "../components/Home/Project";
import Services from "../components/Home/Services";
import Recommendation from "../components/Home/Recommendation";
import Blog from "../components/Home/Blog";
import Contact from "../components/Home/Contact";
import { animated , useSpring } from "@react-spring/web";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../components/Home/Navbar";

const HeroAnimatedComp = animated(Hero);
const StackAnimatedComp = animated(Stack);
const ProjectAnimatedComp = animated(Project);  
const ServicesAnimatedComp = animated(Services);
const RecommendationAnimatedComp = animated(Recommendation);
const BlogAnimatedComp = animated(Blog);
const ContactAnimatedComp = animated(Contact);
const Home = () => {
  return (
    <>
      {/* <HeroAnimatedComp /> */}
      {/* <StackAnimatedComp /> */}
      <ProjectAnimatedComp />
      {/* <ServicesAnimatedComp /> */}
      {/* <RecommendationAnimatedComp /> */}
      {/* <BlogAnimatedComp /> */}
      {/* <ContactAnimatedComp/> */}
    </>
  );
};

export default Home;

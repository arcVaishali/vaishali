import React from "react";
import { SiReact, SiTailwindcss } from "react-icons/si";
import { animated, useSpring } from "@react-spring/web";
import TechStack from "../../assets/techStack.png";

const Stack = () => {
  const [spring, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reverse: false,
  }));
  const list = [];
  return (
    <div className="md:grid lg:grid lg:grid-cols-12 col-span-12 justify-between items-center gap-8 mt-64 mb-64 mr-16 ml-16">
      <div className="md:grid md:col-span-7 lg:grid lg:grid-cols-8 lg:col-span-7">
        <span className="text-7xl col-span-6 font-black uppercase">
          Tech Stack
        </span>
        <div
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          className="text-sm col-span-6 font-light"
        >
          Labore et dolor consequat ea velit. t dolor consequat ea velit. t
          dolor consequat ea velit.
        </div>
      </div>
      <div
        // data-aos-anchor-placement="top-center"
        className="grid grid-cols-5 col-span-5 mt-8"
      >
        <img className="w-fill h-fill col-span-5" src={TechStack} />
      </div>
    </div>
  );
};

export default Stack;

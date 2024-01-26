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
    <div className="grid grid-cols-12 col-span-12 justify-between items-center gap-8 p-8 mt-32 lg:mt-64 lg:mb-64 lg:mr-16 lg:ml-16 lg:p-0">
      <div className="grid grid-rows-1 col-span-12 ml-[100px] lg:ml-16 lg:grid lg:grid-cols-8 lg:col-span-7">
        <span className="text-4xl lg:col-span-7 lg:text-7xl font-black uppercase">
          Tech Stack
        </span>
        <div
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          className="text-sm col-span-6 font-light text-center lg:text-left hidden lg:inline"
        >
          Labore et dolor consequat ea velit. t dolor consequat ea velit. t
          dolor consequat ea velit.
        </div>
      </div>
      <div
        // data-aos-anchor-placement="top-center"
        className="grid grid-cols-5 md:col-start-2 ml-[100px] lg:ml-0 col-span-12 lg:col-span-5 mt-8"
      >
        <img className="w-fill h-fill col-span-5" src={TechStack} />
      </div>
    </div>
  );
};

export default Stack;

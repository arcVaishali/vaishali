import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Marquee from "react-fast-marquee";
import H from "../H";
import { Link } from "react-router-dom";

const Hero = () => {
  const names = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 0];
  const [spring, api] = useSpring(() => ({
    from: { x: 0 },
    to: { x: 100 },
    reverse: true,
  }));

  const [spring2, api2] = useSpring(() => ({
    from: { x: 0 },
    to: { x: -100 },
    reverse: true,
  }));

  const [initial, setInitial] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setInitial(false);
    }, 500);
  }, []);

  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center">
      <animated.span
        style={{ ...spring }}
        className="grid grid-rows-1 col-span-12 col-start-2 col-end-12 lg:col-start-2 lg:col-end-12 text-center font-black text-7xl mt-32 lg:ml-0"
      >
        <span className="text-center font-thin text-xl lg:text-5xl m-2">
          Hey! I am Vaishali
        </span>
        <H
          text="Web Developer Based in Delhi"
          level="1"
          classN=" text-4xl lg:text-8xl "
        />
      </animated.span>

      <animated.span
        style={{ ...spring2 }}
        className="hidden lg:flex col-span-8 col-start-5 col-end-10 text-center text-sm m-2"
      >
        I believe in collaborative excellence, striving resilience.
      </animated.span>
      <div className="col-start-4 grid col-span-6 lg:inline lg:col-span-12 my-8 -ml-2 lg:col-start-5 lg:ml-8">
        <Link
          target="_blank"
          to="https://topmate.io/vaishali_p14"
          className="text-sm bg-black text-white border-2 border-black hover:bg-white hover:text-black rounded-full px-4 py-2 lg:my-8 lg:mx-2 my-2 text-center"
        >
          Book a free call
        </Link>
        <Link
          target="_blank"
          to="https://drive.google.com/file/d/16acvxeGGuvW6n63jfJ4Edu7u8EXkKLx2/view?usp=sharing"
          className="text-sm bg-transparent text-black border-2 border-black hover:bg-white hover:text-black rounded-full px-4 py-2 lg:my-8 my-2 text-center"
        >
          View Resume
        </Link>
      </div>

      <Marquee className="mt-64 grid grid-cols-12 col-span-12 border-t-[1px] border-b-[1px] border-gray-700 py-4 lg:ml-0">
        {names.map((element, index) => (
          <span
            className="px-8 font-light uppercase"
            style={{ fontFamily: "serif" }}
          >
            vadore
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default Hero;

import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Marquee from "react-fast-marquee";
import H from "../H";

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
    <div className="w-[500px] lg:w-screen grid grid-cols-12 col-span-12 justify-center items-center">
      <animated.span
        style={{ ...spring }}
        className="flex flex-col col-span-12 col-start-3 lg:col-start-2 col-end-12 text-center font-black text-7xl mt-32 -ml-8 lg:ml-0"
      >
        <span className="text-center font-thin text-xl lg:text-5xl m-2">
          Hey! I am Vaishali
        </span>
        <H
          text="Web Developer Based in Delhi"
          level="1"
          classN=" text-center text-4xl lg:text-8xl "
        />
      </animated.span>

      <animated.span
        style={{ ...spring2 }}
        className="hidden lg:flex col-span-8 col-start-4 col-end-10 text-center text-sm m-2"
      >
        Quis culpa culpa Lorem velit dolore.Esse elit irure minim ad est
        incididunt commodo eu nulla tempor labore dolor.
      </animated.span>

      <button className="w-[150px] text-sm col-start-5 my-8 ml-2 lg:col-start-6 bg-black text-white border-2 border-black hover:bg-white hover:text-black rounded-full px-4 py-2 lg:my-8 lg:mx-8">
        Book a free call
      </button>
      {initial ? (
        <div className="mt-64 grid grid-cols-12 col-span-12 border-t-[1px] border-b-[1px] border-gray-700 p-4">
          {names.map((element, index) => (
            <span className="px-8 font-black">Linkedin</span>
          ))}
        </div>
      ) : (
        <Marquee className="mt-64 grid grid-cols-12 col-span-12 border-t-[1px] border-b-[1px] border-gray-700 py-4 ml-8 lg:ml-0">
          {names.map((element, index) => (
            <span
              className="px-8 font-light uppercase"
              style={{ fontFamily: "serif" }}
            >
              vadore
            </span>
          ))}
        </Marquee>
      )}
    </div>
  );
};

export default Hero;

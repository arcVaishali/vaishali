import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Marquee from "react-fast-marquee";

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
    <div className="grid grid-cols-12 justify-center items-center">
      <animated.span
        style={{ ...spring }}
        className="flex flex-col col-span-12 col-start-2 col-end-12 text-center font-black text-7xl mt-32"
      >
        <span className="text-center font-thin text-5xl m-2">
          Hey! I am Vaishali
        </span>
        <span className="col-span-12 text-center font-black text-8xl capitalize">
          Web Developer Based in Delhi
        </span>
      </animated.span>

      <animated.span
        style={{ ...spring2 }}
        className="col-span-8 col-start-4 col-end-10 text-center text-sm m-2"
      >
        Quis culpa culpa Lorem velit dolore.Esse elit irure minim ad est
        incididunt commodo eu nulla tempor labore dolor.
      </animated.span>

      <button className="col-span-4 col-start-6 col-end-8 bg-black text-white border-2 border-black hover:bg-white hover:text-black rounded-full px-4 py-2 m-2">
        Book a free call
      </button>
      {initial ? (
        <div className="mt-64 grid grid-cols-12 col-span-12 border-t-[1px] border-b-[1px] border-gray-700 p-4">
          {names.map((element, index) => (
            <span className="px-8 font-black">Linkedin</span>
          ))}
        </div>
      ) : (
        <Marquee className="mt-64 grid grid-cols-12 col-span-12 border-t-[1px] border-b-[1px] border-gray-700  p-4">
          {names.map((element, index) => (
            <span
              className="px-8 font-light uppercase"
              style={{ fontFamily: "serif" }}
            >
              Linkedin
            </span>
          ))}
        </Marquee>
      )}
    </div>
  );
};

export default Hero;

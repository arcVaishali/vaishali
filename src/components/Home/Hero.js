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
    <div className="grid grid-cols-12 justify-center items-center">
      <animated.span
        style={{ ...spring }}
        className="flex flex-col col-span-12 col-start-2 col-end-12 text-center font-black text-7xl mt-32"
      >
        <span className="text-center font-thin min-[602px]:text-5xl max-[2000px]:text-5xl min-[200px]:text-xl max-[914px]:text-xl m-2">
          Hey! I am Vaishali
        </span>
        <H
          text="Web Developer Based in Delhi"
          level="1"
          classN=" text-center min-[602px]:text-8xl max-[900px]:text-4xl "
        />
      </animated.span>

      <animated.span
        style={{ ...spring2 }}
        className="min-[200px]:hidden max-[1023px]:hidden min-[1024px]:flex min-[1024px]:col-span-8 min-[1024px]:col-start-4 min-[1024px]:col-end-10 min-[1024px]:text-center min-[1024px]:text-sm min-[1024px]:m-2"
      >
        Quis culpa culpa Lorem velit dolore.Esse elit irure minim ad est
        incididunt commodo eu nulla tempor labore dolor.
      </animated.span>

      <button className="min-[200px]:w-[150px] max-[1023px]:w-[150px] min-[200px]:text-sm max-[1023px]:text-sm min-[1024px]:col-span-4 col-start-3 col-end-6 bg-black text-white border-2 border-black hover:bg-white hover:text-black rounded-full px-4 py-2 m-8">
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

import React from "react";
import Marquee from "react-fast-marquee";
import { a, animated, useSpring } from "@react-spring/web";
import {
  aboutSectionImage1,
  aboutSectionImage2,
  aboutSectionImage3,
} from "../../constants/imageList";
import development from "../../assets/development.jpg";
import dsa from "../../assets/dsa.jpg";
import cp from "../../assets/competitiveProgramming.jpg";
import design from "../../assets/design.jpg";
const Hero = () => {
  const names = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 0];
  const imgg = [1, { one: "", two: "" }, 3, 4];

  const styleOnHeader = useSpring({
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });
  const styleOnSubHeader = useSpring({
    from: { x: 50, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });
  const styleOnImage = useSpring({
    from: { y: -100 },
    to: { y: 0 },
  });
  return (
    <div className="grid grid-cols-12 justify-center items-center p-8 m-2 lg:pt-32 lg:pl-32 lg:pr-32 lg:pb-8 lg:mb-16">
      <div className="grid grid-rows-1 col-span-12 justify-center items-center">
        <animated.span
          style={{ ...styleOnHeader }}
          className="text-4xl text-center lg:col-span-6 uppercase font-black p-2 lg:text-7xl"
        >
          <span className="hidden lg:inline">i focus on </span>design development and problem solving
        </animated.span>
        <animated.div
          style={{ ...styleOnSubHeader }}
          className="text-center text-sm font-extralight p-2 flex lg:col-span-6 lg:ml-16"
        >
          I provide effective strategies that ensure mutual benefits. As we move forward, we continually innovate and adapt
        </animated.div>
      </div>
      <div className="lg:col-start-1 col-span-12 grid grid-cols-12 justify-center items-center p-4 lg:p-8 gap-4 lg:gap-8">
        {imgg.map((element, index) => (
          <div className="col-span-12 lg:col-span-3 col-start-2 -ml-8 lg:ml-0">
            {index === 1 ? (
              <div>
                <animated.div
                  style={{ ...styleOnImage }}
                  className="col-span-3 lg:col-span-1"
                >
                  <img
                    data-aos="slide-up"
                    src={development}
                    className="w-64 h-fill"
                  />
                </animated.div>
                <animated.div
                  style={{ ...styleOnImage }}
                  className="relative z-10 left-8 bottom-16 lg:bottom-0 lg:left-32 col-span-3 lg:col-span-1"
                >
                  <img
                    data-aos="slide-up"
                    src={cp}
                    className="w-64 h-fill"
                  />
                </animated.div>
              </div>
            ) : (
              <img className="hidden lg:inline" data-aos="zoom-in-up" src={design} />
            )}
          </div>
        ))}
      </div>
      <Marquee
        data-aos="zoom-in-up"
        className="lg:my-32 grid grid-cols-12 col-span-12 border-t-[1px] border-b-[1px] border-gray-700 p-4"
      >
        {names.map((element, index) => (
          <span
            data-aos="zoom-in-up"
            className="px-8 font-light uppercase"
            style={{ fontFamily: "serif" }}
          >
            Linkedin
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default Hero;

import React from "react";
import { ongoingProjectCard } from "../../constants/index";
import { animated, useSpring } from "@react-spring/web";

const Latest = () => {
  const styleX = useSpring({
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });
  const styleY = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  });

  return (
    <div className="grid grid-cols-12 justify-center items-center px-16">
      <animated.span
        data-aos="fade-in"
        style={{ ...styleX }}
        className="text-4xl text-center col-span-12 lg:col-start-2 lg:ml-16 lg:text-7xl uppercase font-black p-16 lg:m-8 "
      >
        Latest Projects
      </animated.span>
      <div className="grid lg:grid-cols-12 col-span-12 lg:col-start-5 gap-4 lg:gap-32 justify-center items-center">
        {ongoingProjectCard.map((element, index) => (
          <div
            data-aos="zoom-in"
            style={{ ...styleY }}
            className="flex flex-col col-span-3"
          >
            <span className="border-l-8 border-black text-xs uppercase p-2 ml-[12px] my-8">
              {element.category}
            </span>
            {/* <div className="rotate-6 col-span-3"> */}
            <div className="z-8 rotate-6">
              <img src={element.image} className="w-fill h-fill" />
            </div>
            <span className="relative -left-[15px] -top-[2px] bg-black text-white text-l uppercase z-9 p-2 rotate-6">
              {element.name}
            </span>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;

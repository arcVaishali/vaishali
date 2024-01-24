import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Marquee from "react-fast-marquee";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { card } from "../../constants/index";
import { animated, useSpring } from "@react-spring/web";

const Achievement = () => {
  const cols = [1, 2];
  const styles = useSpring({
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });
  const style1 = useSpring({
    from: { x: 50, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });
  const style3 = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });
  return (
    <div className="grid grid-cols-12 col-span-12 p-4 lg:p-32 m-4">
      <div className="grid grid-cols-12 col-span-12 justify-center items-center">
        <animated.span
          style={{ ...styles }}
          className="col-span-10 font-black text-4xl lg:text-7xl uppercase"
        >
          <span className="hidden lg:inline">My</span> 
          Achievements
        </animated.span>
        <animated.button
          style={{ ...style1 }}
          className="hidden lg:inline col-span-2 bg-black p-4 text-white border-2 border-black rounded-full hover:bg-white hover:text-black text-sm"
        >
          Get in Touch
        </animated.button>
      </div>
      <div className="grid lg:grid-col-12 col-span-12 p-4 mt-8">
        {cols.map((ele, idx) => (
          <div
            data-aos={idx % 2 == 0 ? "fade-right" : "fade-left"}
            data-aos-easing="ease-in-out"
            className="grid lg:grid-cols-12 col-span-6 gap-8"
          >
            {card.map((element, index) => (
              <animated.div
                style={{ ...style3 }}
                data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
                data-aos-easing="ease-in-out"
                className="flex col-span-6 justify-between items-center border-t-[1px] border-black p-4"
              >
                <span className="uppercase">{element.title}</span>
                <button className="border-[1px] border-black rounded-full p-2">
                  {element.tag}
                </button>
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="cursor-pointer"
                  size="xl"
                  swapOpacity
                  transform={{ rotate: 315 }}
                />
              </animated.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;

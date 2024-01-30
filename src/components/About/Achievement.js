import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import Marquee from "react-fast-marquee";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { card1, card2 } from "../../constants/index";
import { animated, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";

const Achievement = () => {
  const [hover, setHover] = useState(null);
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
  const LinkComp = animated(Link);
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
        <LinkComp
          to="/contact"
          style={{ ...style1 }}
          className="hidden text-center lg:inline col-span-2 bg-black p-4 text-white border-2 border-black rounded-full hover:bg-white hover:text-black text-sm"
        >
          Get in Touch
        </LinkComp>
      </div>
      <div className="grid lg:grid-col-12 col-span-12 justify-center items-center p-4 mt-8">
        {cols.map((ele, idx) => (
          <div
            data-aos={idx % 2 == 0 ? "fade-right" : "fade-left"}
            data-aos-easing="ease-in-out"
            className="grid lg:grid-cols-12 justify-center items-center col-span-6 gap-8"
          >
            {idx === 1
              ? card1.map((element, index) => (
                  <LinkComp to={element.src} target="_blank"
                    style={{ ...style3 }}
                    data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
                    data-aos-easing="ease-in-out"
                    className="grid grid-cols-12 gap-2 lg:col-span-6 col-span-12 justify-between items-center border-t-[1px] border-black p-4"
                    onMouseEnter={() => setHover(element.id)}
                    onMouseLeave={() => setHover(null)}
                  >
                    <span className="uppercase col-span-6"
                    >
                      {element.title}
                    </span>
                    <div className="col-span-4 w-fit text-center cursor-pointer ">
                      {hover === element.id ? (
                        <Marquee className="col-span-4 text-xs w-fit text-center cursor-pointer border-[1px] border-black rounded-full p-2">
                          {element.tag}
                        </Marquee>
                      ) : (
                        <div className="col-span-4 text-xs w-fit text-center cursor-pointer border-[1px] border-black rounded-full p-2">
                          {element.tag}
                        </div>
                      )}
                    </div>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleRight}
                      className="cursor-pointer col-span-2"
                      size="xl"
                      swapOpacity
                      transform={{ rotate: 315 }}
                    />
                  </LinkComp>
                ))
              : card2.map((element, index) => (
                  <LinkComp to={element.src} target="_blank"
                    style={{ ...style3 }}
                    data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
                    data-aos-easing="ease-in-out"
                    className="hidden lg:grid grid-cols-12 gap-2 lg:col-span-6 col-span-12 justify-between items-center border-t-[1px] border-black p-4"
                    onMouseEnter={() => setHover(element.id)}
                    onMouseLeave={() => setHover(null)}
                  >
                    <span className="uppercase col-span-6"
                    >
                      {element.title}
                    </span>
                    <div className="col-span-4 w-fit text-center cursor-pointer ">
                      {hover === element.id ? (
                        <Marquee className="text-center text-xs p-2 cursor-pointer border-[1px] border-black rounded-full">
                          {element.tag}
                        </Marquee>
                      ) : (
                        <div className="text-center text-xs cursor-pointer border-[1px] border-black rounded-full p-2">
                          {element.tag}
                        </div>
                      )}
                    </div>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleRight}
                      className="cursor-pointer col-span-2"
                      size="xl"
                      swapOpacity
                      transform={{ rotate: 315 }}
                    />
                  </LinkComp>
                ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;

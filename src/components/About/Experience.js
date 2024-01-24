import React from "react";
import { Link } from "react-router-dom";
import { exp } from "../../constants/index";
import { animated, useSpring } from "@react-spring/web";

const Experience = () => {
  const styles = useSpring({
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });
  const style2 = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });
  const styleOnContent = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  const AnimatedComponent = animated(Link);
  return (
    <animated.div
      className="grid grid-cols-12 col-span-12 p-16 lg:py-32 lg:px-16 justify-center items-center bg-black text-white my-64"
    >
      <span
        data-aos="zoom-in"
        style={{ ...styles }}
        className="col-span-8 lg:col-start-3 font-black uppercase text-4xl lg:text-7xl text-center"
      >
        Job Experience
      </span>
      <div className="grid lg:grid-cols-12 col-span-12 lg:m-16">
        {exp.map((element, index) => (
          <Link
            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
            style={{ ...style2 }}
            to="/"
            className="flex-rows justify-center lg:flex col-span-12 lg:justify-between items-center border-t-[1px] border-gray-700 p-[20px] transition hover:scale-90 delay-150 duration-1000 cursor-pointer"
          >
            <animated.span
              style={{ ...styleOnContent }}
              className="uppercase font-semibold text-lg lg:text-xl"
            >
              {element.name}
            </animated.span>

            <animated.div
              style={{ ...styleOnContent }}
              className="uppercase font-semibold text-xs lg:text-sm"
            >
              {element.post}
            </animated.div>
          </Link>
        ))}
      </div>
    </animated.div>
  );
};

export default Experience;

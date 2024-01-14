import React from "react";
import { Link } from "react-router-dom";
import { exp } from "../../constants/index";
import { animated, useSpring } from "@react-spring/web";

const Experience = () => {
  const styles = useSpring({
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });
  const style1 = useSpring({
    from: { padding: "8rem" },
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
      style={{ ...style1 }}
      className="grid grid-cols-12 col-span-12 py-32 px-16 justify-center items-center bg-black text-white my-64"
    >
      <span
        data-aos="zoom-in"
        style={{ ...styles }}
        className="col-span-8 col-start-3 font-black uppercase text-7xl text-center"
      >
        Job Experience
      </span>
      <div className="grid grid-cols-12 col-span-12 m-16">
        {exp.map((element, index) => (
          <Link
            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
            style={{ ...style2 }}
            to="/"
            className="flex col-span-12 justify-between items-center border-t-[1px] border-gray-700 p-[20px] transition hover:scale-90 delay-150 duration-1000 cursor-pointer"
          >
            <animated.span
              style={{ ...styleOnContent }}
              className="uppercase font-semibold text-xl"
            >
              {element.name}
            </animated.span>

            <animated.span
              style={{ ...styleOnContent }}
              className="uppercase font-semibold text-sm"
            >
              {element.post}
            </animated.span>
          </Link>
        ))}
      </div>
    </animated.div>
  );
};

export default Experience;

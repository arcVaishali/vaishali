import React from "react";
import Marquee from "react-fast-marquee";
import { animated, useSpring } from "@react-spring/web";

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
    <div className="grid grid-cols-12 justify-center items-center pt-32 pl-32 pr-32 pb-8 mb-16">
      <div className="grid grid-cols-6 col-span-12 justify-center items-center">
        <animated.div
          style={{ ...styleOnHeader }}
          className="col-span-6 text-7xl text-center uppercase font-black p-2"
        >
          {" "}
          i focus on both design and development
        </animated.div>
        <animated.div
          style={{ ...styleOnSubHeader }}
          className="col-start-2 col-span-4 text-center text-sm font-extralight p-2"
        >
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new.
        </animated.div>
      </div>
      <div className="col-span-12 grid grid-cols-12 justify-center items-center p-8 gap-8">
        {imgg.map((element, index) => (
          <div className="col-span-3">
            {index === 1 ? (
              <div>
                <animated.div style={{...styleOnImage}} className="col-span-1">
                  <img
                    src="https://assets.website-files.com/643d8b145b9de160a97cf566/64420e1eea57b57367586b32_Rectangle%2041186.jpg"
                    className="w-32 h-fill"
                  />
                </animated.div>
                <animated.div style={{...styleOnImage}} className="relative z-10 left-32 col-span-1">
                  <img
                    src="https://assets.website-files.com/643d8b145b9de160a97cf566/64420e1e621d9f5fb6e41cd5_Rectangle%2041189.jpg"
                    className="w-32 h-fill"
                  />
                </animated.div>
              </div>
            ) : (
              <img src="https://assets.website-files.com/643d8b145b9de160a97cf566/64420e1ebded42e6dcc69ef5_Rectangle%2041185.jpg" />
            )}
          </div>
        ))}
      </div>
      <Marquee className="my-32 grid grid-cols-12 col-span-12 border-t-[1px] border-b-[1px] border-gray-700 p-4">
        {names.map((element, index) => (
          <span
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

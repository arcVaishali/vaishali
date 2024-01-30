import { React, useState } from "react";
import { edu } from "../../constants/index";
import { animated, useSpring } from "@react-spring/web";

const Education = () => {
  const [content, setContent] = useState("");
  const [click, setClick] = useState(false);
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
  function clickHandler(index) {
    // setClick(true);
    // exp.forEach((element, i) => {
    //   if (i == index) {
    //     setContent(element.description);
    //   }
    // });
  }
  return (
    <animated.div className="grid grid-cols-12 col-span-12 p-16 lg:py-32 lg:px-16 justify-center items-center  my-32 lg:my-64">
      <span
        data-aos="zoom-in"
        style={{ ...styles }}
        className="col-span-8 mb-8 col-start-2 lg:col-start-3 font-black uppercase text-4xl lg:text-7xl text-center"
      >
       Education
      </span>
      <div className="grid lg:grid-cols-12 col-span-12 lg:m-16">
        {edu.map((element, index) => (
          <div
            onClick={() => clickHandler(index)}
            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
            style={{ ...style2 }}
            className="grid lg:grid-cols-12 col-span-12 justify-between items-center border-t-[1px] border-gray-700 p-[20px] transition hover:scale-90 delay-150 duration-1000 cursor-pointer"
          >
            <animated.span
              style={{ ...styleOnContent }}
              className="uppercase col-span-12 text-center lg:text-left lg:col-span-6 font-semibold text-sm lg:text-xl"
            >
              {element.name}
            </animated.span>

            <animated.div
              style={{ ...styleOnContent }}
              className="uppercase col-span-12 text-center lg:text-left lg:col-span-4 font-semibold text-xs lg:text-sm text-gray-700"
            >
              {element.post}
            </animated.div>
            <animated.div
              style={{ ...styleOnContent }}
              className="uppercase col-span-12 text-center lg:text-left lg:col-span-2 font-semibold text-[10px] lg:text-sm text-gray-700"
            >
              {element.tenure}
            </animated.div>
            <animated.div
              style={{ ...styleOnContent }}
              className="uppercase col-span-12 text-center lg:text-left lg:col-span-2 font-semibold text-[10px] lg:text-sm text-gray-700"
            >
              cgpa/percentage: {element.cgpa}
            </animated.div>
            <div
              className={
                click === true
                  ? " hidden " +
                    "col-span-12 justify-between text-xs items-center my-4 cursor-pointer"
                  : "col-span-12 justify-between text-xs items-center my-4 cursor-pointer"
              }
            >
              {content}
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default Education;

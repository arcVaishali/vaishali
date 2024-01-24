import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FAQcard } from "../../constants";
import { animated, useSpring } from "@react-spring/web";
import { image1 } from "../../constants/imageList";

const FAQ = () => {
  const [show, setShow] = useState(false);
  const [elementToShow, setElementToShow] = useState({
    name: "This is the Question?",
    body: "Ex nulla adipisicing minim ipsum pariatur laboris officia incididunt nulla minim.Reprehenderit exercitation et culpa qui sunt aute sit.Labore aliqua eiusmod commodo irure in sit irure esse aute veniam.",
  });
  function onClickHandler(element) {
    setShow(true);
    setElementToShow(element);
  }
  const style1 = useSpring({
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });
  return (
    <div className="grid grid-cols-12 col-span-12 lg:py-16 lg:px-32 m-4 justify-center items-center mb-64">
      <animated.span
        style={{ ...style1 }}
        className="col-span-12 text-4xl lg:text-7xl uppercase font-black text-center m-4"
      >
        FAQs
      </animated.span>
      <div className="grid justify-center lg:grid-cols-12 col-span-12 lg:justify-between gap-16 p-8">
        <animated.span style={{ ...style1 }} className="col-span-4 col-start-2 lg:col-start-1">
          <img data-aos="zoom-in-up" src={image1} className="w-fill h-fill" />
        </animated.span>
        <div className="flex flex-col col-span-6 lg:col-span-8">
          {FAQcard.map((element, index) => (
            <div
            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
              style={{ ...style1 }}
              className="border-t-[1px] border-gray-700 flex flex-col p-4"
            >
              <div className="flex justify-between items-center">
                <span className="text-xl uppercase font-light">
                  {element.name}
                </span>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  onClick={() => onClickHandler(element)}
                />
              </div>

              {show === true ? (
                <div className="text-xs font-extralight">{element.body}</div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

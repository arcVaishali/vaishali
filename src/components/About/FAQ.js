import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FAQcard } from "../../constants";
import { animated, useSpring } from "@react-spring/web";

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
    <div className="grid grid-cols-12 col-span-12 py-16 px-32 m-4 justify-center items-center mb-64">
      <animated.span
        style={{ ...style1 }}
        className="col-span-12 text-7xl uppercase font-black text-center m-4"
      >
        FAQs
      </animated.span>
      <div className="grid grid-cols-12 col-span-12 justify-between gap-16 p-8">
        <animated.span style={{ ...style1 }} className="col-span-4">
          <img
            src="https://assets.website-files.com/643d8b145b9de160a97cf566/6442ac2b40e4d57243e355ea_Rectangle%205.jpg"
            className="w-fill h-fill"
          />
        </animated.span>
        <div className="flex flex-col col-span-8">
          {FAQcard.map((element, index) => (
            <animated.div
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
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

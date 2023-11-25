import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Marquee from "react-fast-marquee";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Achievement = () => {
  const card = [
    {
      title: "Name of Award",
      tag: "sss",
    },
    {
      title: "Name of Award",
      tag: "sss",
    },
    {
      title: "Name of Award",
      tag: "sss",
    },
    {
      title: "Name of Award",
      tag: "sss",
    },
  ];
  return (
    <div className="grid grid-cols-12 col-span-12 p-32 m-4">
      <div className="grid grid-cols-12 col-span-12 justify-center items-center">
        <span className="col-span-10 font-black text-7xl uppercase">
          My Achievements
        </span>
        <button className="col-span-2 bg-black p-4 text-white border-2 border-black rounded-full hover:bg-white hover:text-black text-sm">
          Get in Touch
        </button>
      </div>
      <div className="grid grid-col-6 col-span-6 p-4 mt-8">
        {card.map((element, index) => (
          <div className="flex col-span-6 justify-between items-center border-t-[1px] border-black p-4">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;

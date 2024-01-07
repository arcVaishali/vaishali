import React from "react";
import { Link } from "react-router-dom";
import { exp } from "../../constants/index";

const Experience = () => {
  return (
    <div className="grid grid-cols-12 col-span-12 py-32 px-16 justify-center items-center bg-black text-white my-64">
      <span className="col-span-8 col-start-3 font-black uppercase text-7xl text-center">
        Job Experience
      </span>
      <div className="grid grid-cols-12 col-span-12 m-16">
        {exp.map((element, index) => (
          <Link
            to="/"
            className="flex col-span-12 justify-between items-center border-t-[1px] border-gray-700 p-[20px] transition hover:scale-90 delay-150 duration-1000 cursor-pointer"
          >
            <span className="uppercase font-semibold text-xl">
              {element.name}
            </span>
            <div className="flex justify-evenly items-center">
              <span className="uppercase font-semibold text-sm">
                {element.post}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Experience;

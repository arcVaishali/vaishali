import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const list = [
    "Frontend Development",
    "Backend Development",
    "UI/UX",
    "Blogging",
  ];
  return (
    <div className="grid grid-cols-12 col-span-12 bg-black text-white p-32">
      <span className="text-5xl font-black uppercase mb-16">Services</span>
      <div className="grid grid-cols-12 col-span-12 justify-between item-center gap-16">
        <div className="flex flex-col col-span-6">
          {list.map((element, key) => (
            <span className="flex flex-row justify-between items-center border-t-[1px] border-gray-600 p-4 text-xl uppercase transition hover:scale-90 duration-1000 delay-50">
              {element}{" "}
              <FontAwesomeIcon icon={faArrowRight} className="text-gray-600" />
            </span>
          ))}
        </div>
        <div className="col-span-4 col-start-9">
          <img
            src="https://assets.website-files.com/643d8b145b9de160a97cf566/64719a153090a633cf8ae8a3_Rectangle%2041158%20(1).png"
            className="w-fill h-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

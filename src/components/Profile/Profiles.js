import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import list1 from "./CodingProfiles";

const Profiles = () => {
  return (
    <div className="col-span-12 grid lg:grid-cols-12 mb-4 justify-center items-center">
      {list1.map((element, key) => (
        <div
          data-aos="zoom-in"
          className="grid lg:grid-cols-10 col-span-10 col-start-2 justify-between items-center bg-white rounded-lg shadow-md p-8 m-8"
        >
          <span className="col-span-10 font-extrabold text-lg lg:text-xl capitalize text-gray-600">
            {element.name}
          </span>
          {element.lt.map((ele, key) => (
            <Link
             data-aos="zoom-in"
            //  {key % 2 == 0 ? "zoom-in-right" : "zoom-in-left"}
              className="flex flex-cols justify-center lg:justify-between items-center col-span-10 bg-gray-100 rounded-md p-8 m-2"
              to={ele.src}
            >
              <img className="h-8 w-8" src={ele.icon} />
              <span className="text-gray-700 text-base lg:text-lg font-bold">
                {ele.header}
                <FontAwesomeIcon
                  className="mx-4 text-white"
                  icon={faCircleArrowDown}
                  size="sm"
                  transform={{ rotate: 225 }}
                ></FontAwesomeIcon>
              </span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Profiles;

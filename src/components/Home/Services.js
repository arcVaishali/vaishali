import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { domainList } from "../../constants";
const Services = () => {
 
  return (
    <div className="grid w-screen px-8 py-32 lg:grid-cols-12 bg-black text-white lg:p-32">
      <span
        data-aos="fade-in"
        data-aos-easing="ease-in-out"
        className="text-4xl ml-[150px] lg:ml-16 lg:text-7xl font-black uppercase mb-4 lg:mb-16"
      >
        Services
      </span>
      <div className="md:grid md:p-8 lg:grid lg:grid-cols-12 lg:col-span-12 justify-between item-center gap-16">
        <Link
          to="https://www.fiverr.com/vaishali_p14?up_rollout=true"
          target="_blank"
          className="flex flex-col col-span-6 my-8 lg:my-0"
        >
          {domainList.map((element, key) => (
            <span className="flex flex-row justify-between items-center border-t-[1px] border-gray-600 p-4 text-xl uppercase transition hover:scale-90 duration-1000 delay-50">
              {element}{" "}
              <FontAwesomeIcon icon={faArrowRight} className="text-gray-600" />
            </span>
          ))}
        </Link>
        <div
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          className="col-span-4 col-start-9 ml-[80px] lg:ml-0"
        >
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

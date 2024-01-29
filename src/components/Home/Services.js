import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { domainList } from "../../constants";
import image from "../../assets/services.jpg"
const Services = () => {
 
  return (
    <div className="grid grid-cols-12 justify-center items-center px-8 py-32 bg-black text-white lg:p-32">
      <span
        data-aos="fade-in"
        data-aos-easing="ease-in-out"
        className="col-span-12 text-4xl text-center lg:text-left lg:text-7xl font-black uppercase mb-4 lg:mb-16"
      >
        Services
      </span>
      <div className="grid sm:grid-rows-1 lg:grid-cols-12 col-span-12 justify-between item-center gap-4 lg:gap-16">
        <Link
          to="https://www.fiverr.com/vaishali_p14?up_rollout=true"
          target="_blank"
          className="flex flex-col col-span-12 lg:col-span-6 my-8 lg:my-0"
        >
          {domainList.map((element, key) => (
            <span className="flex flex-row justify-between items-center border-t-[1px] border-gray-600 p-4 text-xl uppercase transition hover:scale-90 duration-1000 delay-50">
              {element}
              <FontAwesomeIcon icon={faArrowRight} className="text-gray-600" />
            </span>
          ))}
        </Link>
        <div
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          className="col-span-12  lg:col-start-8 lg:ml-0 lg:col-span-4"
        >
          <img
            src={image}
            className="w-fill h-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

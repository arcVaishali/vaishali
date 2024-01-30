import React from "react";
import { Link } from "react-router-dom";
import Picture from "../../assets/ProfilePicturecropped.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoOption from "../../assets/VaishaliPortfolioLOGO.png";
import { iconList } from "./CodingProfiles";

const Header = () => {
  return (
    <div className="col-span-12 grid lg:grid-cols-12 mb-2 lg:mb-4 justify-center items-center">
      <div className="grid lg:grid-cols-10 col-span-10 col-start-2 justify-between items-center m-8">
        <span className="col-span-4 col-start-4 lg:col-start-1 leading-7 m-4">
          <img
            data-aos="zoom-in"
            src={Picture}
            className="col-span-2 h-[100px] w-[100px] rounded-[100px] lg:h-[200px] lg:w-[200px] lg:rounded-[200px]"
          />
          <img data-aos="fade-in" className="ml-4 w-16 lg:w-32 lg:ml-0" src={LogoOption} />

          <Link
            className="underline text-[12px] font-semibold text-gray-700 ml-4 lg:ml-0"
            to="/"
          >
            Check out
          </Link>
        </span>
        <div className="hidden lg:flex justify-end items-end col-span-8 mb-2">
          {iconList.map((element, key) => (
            <Link data-aos="fade-in" to={element.to}
            target="_blank"
            >
              <FontAwesomeIcon
                icon={element.icon}
                color={element.color}
                size="lg"
                className="bg-white m-2 rounded-full shadow-md p-2"
              ></FontAwesomeIcon>
            </Link>
          ))}
        </div>
        <div className="text-sm font-normal col-span-12 text-gray-500 ml-4 text-center lg:text-left">
          Mollit ut velit eiusmod pariatur Lorem non amet est.Nostrud in tempor
          irure id adipisicing anim. velit eiusmod pariatur Lorem non amet
          est.Nostrud in tempor irure id adipisicing anim.
        </div>
        <div className="flex lg:hidden justify-end items-end col-start-3 col-span-8 mb-2">
          {iconList.map((element, key) => (
            <Link data-aos="fade-in" to={element.to} target="_blank">
              <FontAwesomeIcon
                icon={element.icon}
                color={element.color}
                size="xs"
                className="bg-white m-2 rounded-full shadow-md p-2"
              ></FontAwesomeIcon>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

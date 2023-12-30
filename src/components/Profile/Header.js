import React from "react";
import { Link } from "react-router-dom";
import Picture from "../../assets/ProfilePicturecropped.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import LogoOption from "../../assets/VaishaliPortfolioLOGO.png";

const Header = () => {
  const list = [
    { icon: faInstagramSquare, color: "pink", to: "/" },
    { icon: faLinkedin, color: "blue", to: "/" },
    { icon: faTwitter, color: "lightblue", to: "/" },
    { icon: faGithub, color: "black", to: "/" },
  ];
  return (
    <div className="col-span-12 grid grid-cols-12 mb-4 justify-center items-center">
      {/* <img
        className="col-span-12 h-[250px] w-full"
        src="https://static.vecteezy.com/system/resources/previews/002/558/855/original/abstract-dark-black-and-grey-modern-material-header-technology-banner-abstract-widescreen-background-vector.jpg"
      /> */}
{/* <span className="col-span-12 col-start-2 text-7xl uppercase font-extrabold p-16 ml-8">socials and profiles</span> */}
      <div className="grid grid-cols-10 col-span-10 col-start-2 justify-between items-center m-8">
        <span className="col-span-4 leading-7 m-4">
          <img
            src={Picture}
            className="col-span-2 h-[200px] w-[200px] rounded-[200px]"
          />
          <img className="w-32" src={LogoOption} />

          <Link
            className="underline text-[12px] font-semibold text-gray-700"
            to="/"
          >
            Check out
          </Link>
        </span>
        <div className="flex justify-end items-end col-span-8 mb-2">
          {list.map((element, key) => (
            <Link to={element.to}>
              <FontAwesomeIcon
                icon={element.icon}
                color={element.color}
                size="lg"
                className="bg-white m-2 rounded-full shadow-md p-2"
              ></FontAwesomeIcon>
            </Link>
          ))}
        </div>
        <div className="text-sm font-normal col-span-12 text-gray-500 ml-4">
          Mollit ut velit eiusmod pariatur Lorem non amet est.Nostrud in tempor
          irure id adipisicing anim. velit eiusmod pariatur Lorem non amet
          est.Nostrud in tempor irure id adipisicing anim.
        </div>
      </div>
    </div>
  );
};

export default Header;

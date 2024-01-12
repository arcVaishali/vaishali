import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/final_logo_design_4_dark.png";
import { sitemap } from "../../constants";
import { socials } from "../../constants";

const Footer = () => {
  return (
    <div className="grid grid-cols-12 col-span-12 px-16 py-8 justify-between items-center bg-[#121212] border-t-[1px] border-b-[1px] border-gray-700 text-white">
      <Link className="col-span-3 w-16" to="/">
        <img src={Logo} />
      </Link>
      <div className="flex col-span-6 justify-center items-center">
        {sitemap.map((element, index) => (
          <Link
            to={element.to}
            className="font-thin uppercase mx-4 text-xs hover:text-gray-300"
          >
            {element.name}
          </Link>
        ))}
      </div>
      <div className="flex col-span-3 justify-center items-center">
        {socials.map((element, index) => (
          <Link
            to={element.to}
            className="font-thin uppercase mx-4 text-xs hover:text-gray-300"
          >
            {" "}
            <FontAwesomeIcon icon={element.name} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const sitemap = [
    { name: "home", to: "/" },
    { name: "about", to: "/about" },
    { name: "work", to: "/work" },
    { name: "blog", to: "/blog" },
    { name: "profile", to: "/profile" },
    { name: "contact", to: "/contact" },
  ];

  const socials = [
    { name: faInstagram, to: "https://www.instagram.com/vaishali_p14" },
    { name: faLinkedin, to: "https://www.instagram.com/vaishali_p14" },
    { name: faTwitter, to: "https://www.instagram.com/vaishali_p14" },
    // {to:"https://www.instagram.com/vaishali_p14"},
    // {to:"https://www.instagram.com/vaishali_p14"},
  ];
  return (
    <div className="grid grid-cols-12 col-span-12 px-16 py-8 justify-between items-center bg-[#121212] border-t-[1px] border-b-[1px] border-gray-700 text-white">
      <div className="col-span-3">Vaishali</div>
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

import React from "react";
import Picture from "../assets/ProfilePicturecropped.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Profile = () => {
  const list = [
    { icon: faInstagramSquare, color: "pink" },
    { icon: faLinkedin, color: "blue" },
    { icon: faTwitter, color: "lightblue" },
    { icon: faGithub, color: "black" },
  ];

  const list1 = [
    {
      name: "LinkedIn",
      src: "https://www.linkedin.com/vaishali_p14",
      img: "",
    },
    {
      name: "LinkedIn",
      src: "https://www.linkedin.com/vaishali_p14",
      img: "",
    },
    {
      name: "LinkedIn",
      src: "https://www.linkedin.com/vaishali_p14",
      img: "",
    },
    {
      name: "LinkedIn",
      src: "https://www.linkedin.com/vaishali_p14",
      img: "",
    },
  ];
  return (
    <div className="grid grid-cols-12 col-span-12 m-8 justify-center items-center">
      <img className="col-span-12" src="https://static.vecteezy.com/system/resources/previews/002/558/855/original/abstract-dark-black-and-grey-modern-material-header-technology-banner-abstract-widescreen-background-vector.jpg"/>
      <img src={Picture} className="absolute ml-8 top-[300px] col-span-2 h-[200px] w-[200px] rounded-[800px]" />

      <div className="grid grid-cols-12 col-span-12 justify-between items-center m-8">
        <span className="col-span-4 leading-3">
          <div className="text-xl" style={{ fontFamily: "fantasy" }}>
            Vaishali
          </div>
          <Link className="underline text-[12px] font-extralight italic text-gray-500" to="/">
            Check out
          </Link>
        </span>
        <div className="flex justify-end items-end col-span-8 mb-2">
          {list.map((element, key) => (
            <FontAwesomeIcon
              icon={element.icon}
              color={element.color}
              size="lg"
              className="bg-white m-2 rounded-full shadow-md p-2"
            ></FontAwesomeIcon>
          ))}
        </div>
      <div className="font-extralight text-sm col-span-12 text-gray-500">Mollit ut velit eiusmod pariatur Lorem non amet est.Nostrud in tempor irure id adipisicing anim.</div>
      </div>

    </div>
  );
};

export default Profile;

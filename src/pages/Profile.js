import React from "react";
import Picture from "../assets/ProfilePicturecropped.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import list1 from "../components/Profile/CodingProfiles";

const Profile = () => {
  const list = [
    { icon: faInstagramSquare, color: "pink", to: "/" },
    { icon: faLinkedin, color: "blue", to: "/" },
    { icon: faTwitter, color: "lightblue", to: "/" },
    { icon: faGithub, color: "black", to: "/" },
  ];

  return (
    <div className="grid grid-cols-12 col-span-12 mb-8 justify-center items-center">
      <img
        className="col-span-12 h-[250px] w-full"
        src="https://static.vecteezy.com/system/resources/previews/002/558/855/original/abstract-dark-black-and-grey-modern-material-header-technology-banner-abstract-widescreen-background-vector.jpg"
      />
      <img
        src={Picture}
        className="absolute left-[100px] top-[100px] col-span-2 h-[200px] w-[200px] rounded-[200px]"
      />

      <div className="grid grid-cols-10 col-span-10 col-start-2 justify-between items-center m-8">
        <span className="col-span-4 leading-7 m-4">
          <div className="text-5xl" style={{ fontFamily: "fantasy" }}>
            Vaishali
          </div>
          <Link
            className="underline text-[12px] font-extralight italic text-gray-500"
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
        <div className="font-extralight text-sm col-span-12 text-gray-500">
          Mollit ut velit eiusmod pariatur Lorem non amet est.Nostrud in tempor
          irure id adipisicing anim.
        </div>
      </div>

      {list1.map((element, key) => (
        <div className="grid grid-cols-10 col-span-10 col-start-2 justify-between items-center bg-white rounded-lg shadow-md p-8 m-8">
          <span className="col-span-10 font-extrabold text-xl capitalize text-gray-600">
            {element.name}
          </span>
          {element.lt.map((ele, key) => (
            <Link
              className="flex flex-cols justify-between items-center col-span-10 bg-gray-100 rounded-md p-8 m-2"
              to={ele.src}
            >
              <img className="h-8 w-8" src={ele.icon} />
              <span className="text-gray-700 text-l font-bold">
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

export default Profile;

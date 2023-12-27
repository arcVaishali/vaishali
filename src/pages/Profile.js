import React from "react";
import Picture from "../assets/ProfilePicturecropped.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  const list = [ 
    {icon:faInstagramSquare , color:"pink"}, {icon:faLinkedin , color:"blue"}, {icon:faTwitter , color:"lightblue"}, {icon:faGithub , color:"black"}];

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
    <div className="grid grid-cols-12 col-span-12 px-32 py-16 m-8 justify-center items-center">
      <img src={Picture} className="col-span-2 h-[200px] w-[400px]" />

      <div className="grid grid-cols-12 col-span-12 justify-between items-center m-8">
        <span className="col-span-4 text-xl" style={{fontFamily:"fantasy"}}>
          Vaishali
        </span>
        <div className="flex justify-end items-end col-span-8 ">
          {list.map((element, key) => (
            <FontAwesomeIcon
              icon={element.icon}
              color={element.color}
              size="lg"
              className="bg-white p-2"
            ></FontAwesomeIcon>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

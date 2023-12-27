import React from "react";
import Picture from "../assets/ProfilePicturecropped.jpeg"

const Profile = () => {
  const list = [
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
      <div className="w-32 h-32">
        <img src={Picture} className="h-[200px] w-[400px]"/>
      </div>
      <div className="flex-rows grid-span-12 justify-between">
        <span className="text-sm font-extralight uppercase p-4 my-4 text-center">Vaishali</span>
        <div className="text-sm font-extralight uppercase p-4 my-4 text-center">Vaishali</div>
        
      </div>
    </div>
  );
};

export default Profile;

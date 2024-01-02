import React from "react";
import { Link } from "react-router-dom";
import ProjectImage from "../../assets/project_image.png";
import ReliefConnect from "../../assets/ReliefConnect.png";
import EmbraceAutism from "../../assets/EmbraceAutism.png";
import MigrantMingle from "../../assets/MigrantMingle.png";
import RaiseWaves from "../../assets/RaiseWaves.png";

const Project = () => {
  const list = [
    {
      to: "https://devpost.com/software/relief-connect",
      src: ReliefConnect,
      body:"This is a disaster relief and rescue aid. It aims to reduce the issue of fragmented response by various organizations during the times of natural calamity.",
      text: "Relief Connect",
    },
    {
      to: "https://devpost.com/software/embrace-autism",
      src: EmbraceAutism,
      body:"Embrace Autism: Empowering Lives, Inspiring Hearts. Join us on a journey of understanding, support, and inclusivity.",
      text: "Embrace Autism",
    },
    {
      to: "https://devpost.com/software/collaborative-study-groups-app-empower-hack",
      src: MigrantMingle,
      body:"A digital gathering place where first-generation low-income immigrant students can mingle, exchange family recipes, get in touch with others, and update their statuses to maintain a sense of security",
      text: "Migrant Mingle",
    },
    {
      to: "https://devpost.com/software/raise-waves",
      src: RaiseWaves,
      body:"Elevating Dreams, One Backer at a Time. Raise Waves, an innovative crowdfunding ecosystem, a space where passionate creators and changemakers can connect with backers who believe in their ideas.",
      text: "Raise Waves",
    },
  ];

  function handle() {}
  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center m-32 gap-8">
      <span className="col-start-2 ml-16 col-end-12 text-6xl font-black uppercase mb-8">
        Featured Projects
      </span>

      <div className="grid grid-cols-12 col-span-12 gap-8 justify-between col-start-1">
        {list.map((element, index) => (
          <Link
            to={element.to}
            target="_blank"
            className="flex flex-col col-span-6"
            onMouseOver={() => handle()}
          >
            <img src={element.src} className="h-80" />

            <span className="text-black font-extralight text-sm p-4">
              {element.body}
              <Link to={element.to} target="_blank" className="font-normal underline block">{element.text}</Link>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;

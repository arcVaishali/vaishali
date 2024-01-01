import React from "react";
import { Link } from "react-router-dom";
import ProjectImage from "../../assets/project_image.png";
import ReliefConnect from "../../assets/ReliefConnect.png"
import EmbraceAutism from "../../assets/EmbraceAutism.png"
import MigrantMingle from "../../assets/MigrantMingle.png"
import RaiseWaves from "../../assets/RaiseWaves.png"

const Project = () => {
  const list = [
    {
      to: "/",
      src: ReliefConnect,
      text: "Relief Connect",
    },
    {
      to: "/",
      src: EmbraceAutism,
      text: "Embrace Autism",
    },
    {
      to: "/",
      src: MigrantMingle,
      text: "Migrant Mingle",
    },
    {
      to: "/",
      src: RaiseWaves,
      text: "Raise Waves",
    },
  ];

  function handle(){

  }
  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center m-32 gap-8">
      <span className="col-start-2 ml-16 col-end-12 text-6xl font-black uppercase mb-8">
        Featured Projects
      </span>

      <div className="grid grid-cols-12 col-span-12 gap-8 justify-between col-start-1">
        {list.map((element, index) => (
          <Link to={element.to} className="flex flex-col col-span-6" onMouseOver={()=>handle()}>
            <img src={element.src} className="h-80" />

            <span className="text-black font-extralight text-sm p-4">
              Eu ex dolor reprehenderit ex magna incididunt minim officia id laboris duis ipsum.
              <div className="font-normal underline"> 

              {element.text}
              </div>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;

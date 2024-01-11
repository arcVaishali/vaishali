import React from "react";
import { Link } from "react-router-dom";
import { projectList } from "../../constants";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Project = () => {
  function handle() {}
  return (
    <Parallax
      pages={4}
      // className="grid grid-cols-12 justify-between items-center gap-4"
    >
        <ParallaxLayer offset={1} speed={2}
        className="w-[50%]"
         >
          Featured Projects
        </ParallaxLayer>
      {/* <ParallaxLayer offset={1} speed={2} className="col-span-6 ml-16 text-6xl font-black uppercase mb-8">
      </ParallaxLayer> */}

      <ParallaxLayer offset={1} speed={2} 
      className="w-[50%] ml-[500px]"
      // className="grid col-span-6 gap-8 justify-between"
      >
        {/* <div className="grid col-span-6 gap-8 justify-between"> */}
          {projectList.map((element, index) => (
            <Link
              to={element.to}
              target="_blank"
              className="w-[30%]"
              onMouseOver={() => handle()}
            >
              <img src={element.src} className="h-80" />

              <span 
              className="text-black font-extralight text-sm p-4"
              >
                {element.body}
                <Link
                  to={element.to}
                  target="_blank"
                  className="font-normal underline block"
                >
                  {element.text}
                </Link>
              </span>
            </Link>
          ))}
        {/* </div> */}
      </ParallaxLayer>

    </Parallax>
  );
};

export default Project;

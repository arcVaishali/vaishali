import React from "react";
import { Link } from "react-router-dom";
import { projectList } from "../../constants";

const Project = () => {
  function handle() {}
  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center m-32 gap-8">
      <span className="lg:col-start-2 col-start-3 lg:ml-16 lg:col-end-12 text-4xl lg:text-6xl font-black uppercase mb-8">
        <span className="hidden lg:inline">Featured</span> Projects
      </span>

      <div className="grid lg:grid lg:grid-cols-12 col-span-12 gap-8 justify-between lg:col-start-1">
        {projectList.map((element, index) => (
          <Link
            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
            data-aos-easing="ease-in-out"
            to={element.to}
            target="_blank"
            className="flex flex-col col-span-6"
            // onMouseOver={() => handle()}
          >
            <img src={element.src} className="h-[500px]" />

            <span className="text-black font-extralight text-sm p-4">
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
      </div>
    </div>
  );
};

export default Project;

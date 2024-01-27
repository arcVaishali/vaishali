import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../../constants";

const List = () => {
  return (
    <div className="grid w-full grid-cols-12 col-span-12 justify-center items-center gap-8 p-4">
      {blogData.map((element, index) => (
        <Link
          data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
          data-aos-offset="200"
          to={element.to}
          target="_blank"
          className="col-span-12 lg:col-span-6 lg:p-4"
        >
          <div>
            <img src={element.src} className="h-fill w-fill" />
          </div>
          <div className="text-base font-extralight lg:p-2">{element.text}</div>
          <Link
            to={element.to}
            target="_blank"
            className="bg-transparent text-black underline lg:p-2"
          >
            Read more
          </Link>
        </Link>
      ))}
    </div>
  );
};

export default List;

import React from "react";
import { dummyImage } from "../../constants/imageList";
import { dummyImage2 } from "../../constants/imageList";

const Recommendation = () => {
  return (
    <div className="grid lg:grid-cols-12 ml-16 mr-16 mb-16 mt-32 lg:mt-16">
      <span className="col-span-12 text-4xl lg:text-7xl lg:p-16 font-black uppercase mb-16 ml-[50px] lg:ml-[200px]">
        Testimonials
      </span>
      <div className="grid lg:grid-cols-12 col-span-12 justify-center items-center ml-[50px] lg:ml-32">
        <div
          data-aos="fade-up-left"
          className="lg:col-span-4 col-span-6"
        >
          <img
            src={dummyImage}
            className="w-fill h-fill"
          />
        </div>
        <div
          data-aos="fade-in"
          className="col-span-6 text-sm font-extralight mt-8 lg:mt-0 lg:ml-16"
        >
          Voluptate do aliqua aliqua duis esse nisi.Enim incididunt id sunt sit
          nisi incididunt sint mollit veniam eiusmod.Sit qui duis occaecat minim
          dolor.
          <img src={dummyImage2} />
        </div>
      </div>
    </div>
  );
};

export default Recommendation;

import React from "react";
import { dummyImage } from "../../constants";
import { dummyImage2 } from "../../constants";
const Recommendation = () => {
  return (
    <div className="grid grid-cols-12 col-span-12 p-32 m-16">
      <span className="col-span-12 text-7xl font-black uppercase mb-16">
        Testimonials
      </span>
      <div className="col-span-12 grid grid-cols-12 justify-center items-center">
        <div
          data-aos="fade-up-left"
          className="col-span-6"
        >
          <img
            src={dummyImage}
            className="w-fill h-fill"
          />
        </div>
        <div
          data-aos="fade-in"
          className="col-span-6 text-sm font-extralight"
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

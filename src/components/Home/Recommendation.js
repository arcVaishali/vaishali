import React from "react";

const Recommendation = () => {
  return (
    <div className="grid grid-cols-12 col-span-12 p-32 m-16">
      <span className="col-span-12 text-7xl font-black uppercase mb-16">
        Testimonials
      </span>
      <div className="col-span-12 grid grid-cols-12 justify-center items-center">
        <div
          data-aos="fade-up-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="col-span-6"
        >
          <img
            src="https://assets.website-files.com/643d8b145b9de160a97cf566/644146cc0b106fd053b1b3fd_Rectangle%2041179.jpg"
            className="w-fill h-fill"
          />
        </div>
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="col-span-6 text-sm font-extralight"
        >
          Voluptate do aliqua aliqua duis esse nisi.Enim incididunt id sunt sit
          nisi incididunt sint mollit veniam eiusmod.Sit qui duis occaecat minim
          dolor.
          <img src="https://assets.website-files.com/643d8b145b9de160a97cf566/64414cd179cae64ec7f55948_Group%20427319265.svg" />
        </div>
      </div>
    </div>
  );
};

export default Recommendation;

import React from "react";
import { dummyImage } from "../../constants/imageList";
import { dummyImage2 } from "../../constants/imageList";

const Recommendation = () => {
  return (
    <div className="grid lg:grid-cols-12 m-16">
      <span className="col-span-12 text-4xl lg:text-7xl lg:p-32 font-black uppercase mb-16">
        Testimonials
      </span>
      <div className="grid lg:grid-cols-12 col-span-12 justify-center items-center">
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
          className="col-span-6 text-sm font-extralight mt-8 lg:mt-0"
        >
          Vaishali is a highly skilled and dedicated professional whom I've had the pleasure of collaborating with on various projects. Their exceptional abilities and commitment to excellence make them a standout talent in the industry.
          {/* <img src={dummyImage2} /> */}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;

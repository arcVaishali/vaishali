import { React, useState } from "react";
import  dummyImage  from "../../assets/recommendationsImage.jpg";
import { dummyImage2 } from "../../constants/imageList";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { recommendationList1 } from "../../constants/index";

const Recommendation = () => {
  const [text, setText] = useState(
    "Vaishali is a highly skilled and dedicated professional whom I've had the pleasure of collaborating with on various projects. Their exceptional abilities and commitment to excellence make them a standout talent in the industry."
  );

  function handleClick() {
    setText(recommendationList1[Math.floor(Math.random() * recommendationList1.length)]);
  }
  return (
    <div className="grid grid-cols-12 mb-16 mt-32 p-4 lg:mt-16">
      <span className="col-span-12 text-center lg:text-left text-4xl lg:text-7xl lg:p-16 font-black uppercase mb-16 lg:ml-[200px]">
        Testimonials
      </span>
      <div className="grid grid-cols-12 col-span-12 justify-center items-center ml-4 lg:ml-32">
        <div data-aos="fade-up-left" className="lg:col-span-4 col-span-12">
          <img src={dummyImage} className="w-fill h-fill" />
        </div>
        <div
          data-aos="fade-in"
          className="col-span-12 lg:col-span-6 text-sm font-extralight mt-8 lg:mt-0 lg:ml-16"
        >
          {text}
          <img className="h-8 w-8" onClick={() => handleClick()} src={dummyImage2} />
        </div>
      </div>
    </div>
  );
};

export default Recommendation;

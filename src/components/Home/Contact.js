import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="grid grid-cols-12 p-32 mt-8 bg-[#121212] text-white">
      <div
        data-aos="fade-up-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="linear"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="flex flex-col text-8xl font-black justify-center items-center col-start-3 col-end-11 uppercase"
        style={{ fontFamily: "Fontsfree net xillian, sans-serif" }}
      >
        <span
          data-aos="fade-up-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="text-center m-2"
        >
          Have an Idea?
        </span>
        <Link
          to="/contact"
          className="rounded-full uppercase py-4 px-8 border-[1px] border-white hover:bg-[#e4eae4da] hover:text-black"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Contact;

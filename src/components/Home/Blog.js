import React from "react";
import List from "../Blog/List";

const Blog = () => {
  const list = [1, 2, 3, 4];
  return (
    <div className="grid grid-cols-12 justify-center items-center p-32">
      <div className="grid grid-cols-12 col-span-12 justify-between items-center mb-16">
        <span
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="col-span-10 text-7xl uppercase font-black"
        >
          Blogs and Articles
        </span>
        <button
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="col-span-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black rounded-full p-2"
        >
          View all
        </button>
      </div>
      <List />
    </div>
  );
};

export default Blog;

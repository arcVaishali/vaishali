import React from "react";
import List from "../Blog/List";

const Blog = () => {
  return (
    <div className="grid grid-cols-12 justify-center items-center p-4 lg:p-32">
      <div className="grid grid-cols-12 col-span-12 justify-between items-center mb-16">
        <span
          data-aos="fade-in"
          className="col-span-10 text-4xl lg:text-7xl uppercase font-black"
        >
          Blogs 
          <span className="hidden lg:inline"> and Articles </span>
        </span>
        <button
          data-aos="fade-in"
          className="w-[80px] -ml-8 text-sm lg:mt-0 lg:w-[150px] lg:text-xl lg:col-start-11 lg:ml-0 col-span-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black p-[5px] rounded-full lg:p-2"
        >
          View all
        </button>
      </div>
      <List />
    </div>
  );
};

export default Blog;

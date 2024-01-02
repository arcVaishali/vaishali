import React from "react";
import List from "../Blog/List";

const Blog = () => {
  const list = [1, 2, 3, 4];
  return (
    <div className="grid grid-cols-12 justify-center items-center p-32">
      <div className="grid grid-cols-12 col-span-12 justify-between items-center mb-16">
        <span className="col-span-10 text-7xl uppercase font-black">
          Blogs and Articles
        </span>
        <button className="col-span-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black rounded-full p-2">
          View all
        </button>
      </div>
      <List/>
    </div>
  );
};

export default Blog;

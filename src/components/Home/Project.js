import React from "react";

const Project = () => {
  const list = [1, 2, 3, 4];
  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center m-32 gap-8">
      <span className="col-start-2 col-end-9 text-7xl font-black uppercase">
        Featured Projects
      </span>
      <img
        src="https://assets.website-files.com/64400efa17592edf6ae1a250/64400f4f88d17b66010d4658_Rectangle%2041162.jpg"
        className="col-span-4 w-fill h-fill"
      />
      <div className="grid grid-cols-12 col-span-12 gap-8 justify-between col-start-1">
        {list.map((element, index) => (
          <div className="flex flex-col col-span-6">
            <div className="">
              <img
                src="https://assets.website-files.com/64400efa17592edf6ae1a250/64400f4f88d17b66010d4658_Rectangle%2041162.jpg"
                className="w-fill h-fill"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

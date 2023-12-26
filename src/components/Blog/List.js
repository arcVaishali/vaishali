import React from "react";

const List = () => {
  const list = [1, 2, 3, 4];

  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center gap-8 p-4">
      {list.map((element, index) => (
        <div className="col-span-6 p-4">
          <div>
            <img
              src="https://assets.website-files.com/64400efa17592edf6ae1a250/65093026e0d80c3d17acc9c4_rectangle_41210-p-800.webp"
              className="h-fill w-fill"
            />
          </div>
          <div className="text-sm font-extralight p-2">
            Eiusmod id aliquip dolore ex cupidatat cupidatat laboris enim eu
            elit.Minim ea consequat ad ea.Duis mollit nostrud cillum eu
            excepteur pariatur aliquip.
          </div>
          <button className="bg-transparent text-black underline">
            Read more
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;

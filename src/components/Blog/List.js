import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  const list = [
    {
      to:"https://vaishalionlc.hashnode.dev/leetcode-2653-sliding-subarray-beauty",
      src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1680529848031/c021c599-1102-46b6-a620-503ff68f0a20.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      text: "Leetcode #2653 Sliding Subarray Beauty",
    },
    {
      to:"https://vaishalionlc.hashnode.dev/leetcode-881-boats-to-save-people",
      src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1680529848031/c021c599-1102-46b6-a620-503ff68f0a20.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      text: "Leetcode #881: Boats to Save People",
    },
  ];

  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center gap-8 p-4">
      {list.map((element, index) => (
        <Link to={element.to} target="_blank" className="col-span-6 p-4">
          <div>
            <img src={element.src} className="h-fill w-fill" />
          </div>
          <div className="text-base font-extralight p-2">{element.text}</div>
          <Link to={element.to} target="_blank" className="bg-transparent text-black underline p-2">
            Read more
          </Link>
        </Link>
      ))}
    </div>
  );
};

export default List;

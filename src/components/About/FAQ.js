import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const FAQ = () => {
  const card = [
    {
      name: "This is the Question?",
      body: "Ex nulla adipisicing minim ipsum pariatur laboris officia incididunt nulla minim.Reprehenderit exercitation et culpa qui sunt aute sit.Labore aliqua eiusmod commodo irure in sit irure esse aute veniam.",
    },
    {
      name: "How to help you?",
      body: "Ex nulla adipisicing minim ipsum pariatur laboris officia incididunt nulla minim.Reprehenderit exercitation et culpa qui sunt aute sit.Labore aliqua eiusmod commodo irure in sit irure esse aute veniam.",
    },
    {
      name: "How are You?",
      body: "Ex nulla adipisicing minim ipsum pariatur laboris officia incididunt nulla minim.Reprehenderit exercitation et culpa qui sunt aute sit.Labore aliqua eiusmod commodo irure in sit irure esse aute veniam.",
    },
    {
      name: "Where to find you?",
      body: "Ex nulla adipisicing minim ipsum pariatur laboris officia incididunt nulla minim.Reprehenderit exercitation et culpa qui sunt aute sit.Labore aliqua eiusmod commodo irure in sit irure esse aute veniam.",
    },
    {
      name: "Where to ping you?",
      body: "Ex nulla adipisicing minim ipsum pariatur laboris officia incididunt nulla minim.Reprehenderit exercitation et culpa qui sunt aute sit.Labore aliqua eiusmod commodo irure in sit irure esse aute veniam.",
    },
  ];
  const [show, setShow] = useState(false);
  const [elementToShow, setElementToShow] = useState({
    name: "This is the Question?",
    body: "Ex nulla adipisicing minim ipsum pariatur laboris officia incididunt nulla minim.Reprehenderit exercitation et culpa qui sunt aute sit.Labore aliqua eiusmod commodo irure in sit irure esse aute veniam.",
  });
  function onClickHandler(element) {
    setShow(true);
    setElementToShow(element);
  }
  return (
    <div className="grid grid-cols-12 col-span-12 py-16 px-32 m-4 justify-center items-center mb-64">
      <span className="col-span-12 text-7xl uppercase font-black text-center m-4">
        FAQs
      </span>
      <div className="grid grid-cols-12 col-span-12 justify-between gap-16 p-8">
        <div className="col-span-4">
          <img
            src="https://assets.website-files.com/643d8b145b9de160a97cf566/6442ac2b40e4d57243e355ea_Rectangle%205.jpg"
            className="w-fill h-fill"
          />
        </div>
        <div className="flex flex-col col-span-8">
          {card.map((element, index) => (
            <div className="border-t-[1px] border-gray-700 flex flex-col p-4">
              <div className="flex justify-between items-center">
                <span className="text-xl uppercase font-light">{element.name}</span>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  onClick={() => onClickHandler(element)}
                />
              </div>

              {show === true ? (
                <div className="text-xs font-extralight">{element.body}</div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const card = [
    {
      mini: "S/3",
      title: "Webflow Website",
      body: "Aliqua adipisicing dolore aliqua ex ipsum do sit cupidatat esse ipsum.Quis ea in irure veniam ex eiusmod.Magna labore magna consectetur id dolor amet tempor incididunt excepteur laborum.",
    },
    {
      mini: "S/3",
      title: "Webflow Website",
      body: "Aliqua adipisicing dolore aliqua ex ipsum do sit cupidatat esse ipsum.Quis ea in irure veniam ex eiusmod.Magna labore magna consectetur id dolor amet tempor incididunt excepteur laborum.",
    },
    {
      mini: "S/3",
      title: "Webflow Website",
      body: "Aliqua adipisicing dolore aliqua ex ipsum do sit cupidatat esse ipsum.Quis ea in irure veniam ex eiusmod.Magna labore magna consectetur id dolor amet tempor incididunt excepteur laborum.",
    },
    {
      mini: "S/3",
      title: "Webflow Website",
      body: "Aliqua adipisicing dolore aliqua ex ipsum do sit cupidatat esse ipsum.Quis ea in irure veniam ex eiusmod.Magna labore magna consectetur id dolor amet tempor incididunt excepteur laborum.",
    },
  ];

  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center px-16 py-8 my-32">
      <span className="col-span-12 text-6xl uppercase font-black col-start-1 text-center my-8">
        What to expect from me
      </span>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="col-span-12 my-16"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass="col-span-2 gap-8"
        slidesToSlide={2}
        swipeable
      >
        {card.map((element, index) => (
          <div className="flex flex-col bg-white p-4" style={{border:"5px double gray"}}>
            <span className="text-xs font-extralight m-2">{element.mini}</span>
            <span className="text-xl font-semibold m-2">{element.title}</span>
            <span className="text-base font-light m-2">{element.body}</span>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;

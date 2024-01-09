import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { animated, useSpring } from "@react-spring/web";
import { SliderCardValues } from "../../constants";
import { SliderCardResponsiveDesign } from "../../constants";

const Slider = () => {
  const style1 = useSpring({
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  const styleOnCard = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center px-16 py-8 my-32">
      <animated.span
        style={{ ...style1 }}
        className="col-span-12 text-6xl uppercase font-black col-start-1 text-center my-8"
      >
        What to expect from me
      </animated.span>

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
        responsive={SliderCardResponsiveDesign}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass="col-span-2 gap-8"
        slidesToSlide={2}
        swipeable
      >
        {SliderCardValues.map((element, index) => (
          <animated.div
            className="flex flex-col bg-white p-4"
            style={{ border: "5px double gray", ...styleOnCard }}
          >
            <animated.span
              style={{ ...styleOnCard }}
              className="text-xs font-extralight m-2"
            >
              {element.mini}
            </animated.span>
            <animated.span
              style={{ ...styleOnCard }}
              className="text-xl font-semibold m-2"
            >
              {element.title}
            </animated.span>
            <animated.span
              style={{ ...styleOnCard }}
              className="text-base font-light m-2"
            >
              {element.body}
            </animated.span>
          </animated.div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const sections = [
    {
      backgroundImageHovered: "/static/images/Materialidad-59.png",
      backgroundImage: "/static/images/mockup-EVA-76.png",
    },
    {
      backgroundImageHovered: "/static/images/Movimiento-59.png",
      backgroundImage: "/static/images/mockup-EVA-78.png",
    },
    {
      backgroundImageHovered: "/static/images/5ta-Fachada-59.png",
      backgroundImage: "/static/images/mockup-EVA-75.png",
    },
    {
      backgroundImageHovered: "/static/images/Separación-de-usos-59.png",
      backgroundImage: "/static/images/mockup-EVA-69.png",
    },
    {
      backgroundImageHovered: "/static/images/Verde-Continuo-59.png",
      backgroundImage: "/static/images/mockup-EVA-74.png",
    },
    {
      backgroundImageHovered: "/static/images/Separación-de-usos-59.png",
      backgroundImage: "/static/images/mockup-EVA-77.png",
    },
  ];

  const visibleSections = sections.slice(activeIndex, activeIndex + 6);

  return (
    <div className="relative">
      <div className="flex flex-wrap">
        {visibleSections.map((section, index) => (
          <div
            key={index}
            className={`bg-white w-1/6 ${
              activeIndex === index ? "hovered-column" : ""
            }`}
            onMouseEnter={() => {
              if (activeIndex !== index) setActiveIndex(index);
            }}
            onMouseLeave={() => {
              if (activeIndex !== index) setActiveIndex(null);
            }}
          >
            <a href={`#${index}`}>
              {activeIndex === index ? (
                <div>
                  <div className="relative">
                    <div className="absolute w-full h-1 bg-gray-500 top-1/2 transform -translate-y-1/2" />
                  </div>
                  <img
                    src={section.backgroundImageHovered}
                    alt=""
                    className="principios-images-hovered"
                  />
                </div>
              ) : (
                <img
                  src={section.backgroundImage}
                  alt=""
                  className="principios-images"
                />
              )}
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handlePrev} disabled={activeIndex === 0} className="mr-2">
          <FaChevronLeft />
        </button>
        <button onClick={handleNext} disabled={activeIndex === sections.length - 1} className="ml-2">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Timeline;
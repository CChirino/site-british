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
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_1.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_1.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_2.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_2.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_3.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_3.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_4.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_4.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_5.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_5.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_6.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_6.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_7.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_7.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_8.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_8.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_9.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_9.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_10.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_10.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_11.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_11.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_12.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_12.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_13.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_13.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_14.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_14.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_15.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_15.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_16.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_16.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_17.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_17.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_18.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_18.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_19.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_19.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_20.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_20.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_21.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_21.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_22.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_22.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_23.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_23.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_24.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_24.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_25.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_25.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_26.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_26.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_27.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_27.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_28.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_28.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_29.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_29.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_30.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_30.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/Griss_31.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/Selección_31.png",
    },
  ];

  const visibleSections = sections.slice(activeIndex, activeIndex + 6);

  return (
    <div className="relative" id="cronologia-cuc" style={{ backgroundColor: "rgb(189 189 189)" }}>
          <div className="text-white text-center pt-4 pb-5">
            <h1 className="pb-7 subtitle-section ">Cronología</h1>
        </div>
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
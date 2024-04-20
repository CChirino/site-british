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
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_1.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_1.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_2.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_2.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_3.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_3.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_4.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_4.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_5.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_5.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 2.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 2.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 3.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 3.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 4.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 4.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 5.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 5.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 6.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 6.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 7.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 7.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 8.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 8.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 9.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 9.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 10.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 10.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 11.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 11.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 12.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 12.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 13.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 13.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 14.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 14.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 15.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 15.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 16.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 16.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 17.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 17.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 18.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 18.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 19.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 19.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 20.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 20.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 21.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 21.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 22.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 22.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 23.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 23.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 24.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 24.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/LineaT cuc_6 copy 25.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_6 copy 2.png",
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
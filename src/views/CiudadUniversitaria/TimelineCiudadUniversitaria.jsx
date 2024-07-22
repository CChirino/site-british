import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex <= sections.length ? nextIndex : 0; 
    });
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex >= 0 ? nextIndex : prevIndex;
    });
  };

  const sections = [
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G1.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_01.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G2.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_02.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G3.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_03.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G4.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_04.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G5.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_05.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G6.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_06.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G7.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_07.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G8.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_08.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G9.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_09.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G10.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_10-41.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G11.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_11-42.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G15.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_12-43.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G2.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_13-44.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G17.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_14-45.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G19.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_15-46.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G21.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_16-47.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G18.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_17-48.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G23.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_18-49.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G20.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_19-50.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G22.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_20-51.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G24.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_21-52.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G25.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_22-53.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G29.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_23-54.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G30.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_24-55.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G27.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_25-56.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G3.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_26-57.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G28.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_27-58.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G26.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_28-59.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G4.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_29-60.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G31.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_30-61.png",
    },
    {
      backgroundImageHovered: "/static/images/linea-tiempo-cuc/CUC_G5.png",
      backgroundImage: "/static/images/linea-tiempo-cuc/CUC_31-62.png",
    },
  ];

  const visibleSections = sections.slice(activeIndex, activeIndex + 6);

  return (
    <div className="relative" id="cronologia-cuc" style={{ backgroundColor: "rgb(189 189 189)" }}>
      <div className="text-white text-center pt-4 pb-5">
        <h1 className="pb-7 subtitle-section">Cronología</h1>
      </div>
      <div className="flex flex-wrap principios-images">
        {visibleSections.map((section, index) => (
          <div key={index} className="bg-white w-1/6">
            <a href={`#${index}`}>
            <img
                src={section.backgroundImageHovered}
                alt=""
                className="principios-images"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handlePrev} disabled={activeIndex === 0} className="mr-2">
          <FaChevronLeft />
        </button>
        <button onClick={handleNext} disabled={activeIndex === sections.length - 6} className="ml-2">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Timeline;
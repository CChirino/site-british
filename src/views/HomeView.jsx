import React, { useState } from "react";
import HeaderHome from "../components/HeaderHome";
import FooterHome from "../components/FooterHome";

const HomeView = () => {
  const [hoveredColumn, setHoveredColumn] = useState(null);
  const [showSection, setShowSection] = useState(true);

  const handleMouseEnter = (columnIndex) => {
    setHoveredColumn(columnIndex);
    setShowSection(false);
  };

  const handleMouseLeave = () => {
    setHoveredColumn(null);
    setShowSection(true);
  };

  return (
    <div>
      <div className="relative">
        <div className="flex">
          <div
            className={`bg-white w-1/4 ${
              hoveredColumn === 0 ? "hovered-column" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >          
          <a href="#home-ciudad">
            {hoveredColumn === 0 ? (
              <div>
                <img
                  src="/static/images/Portda Reloj.png"
                  alt=""
                  className="hovered-images"
                />
              </div>
            ) : (
              <img
                src="/static/images/mockup EVA-65.png"
                alt=""
                className="home-images"
              />
            )}
          </a>
          </div>
          <div
            className={`bg-white w-1/4 ${
              hoveredColumn === 1 ? "hovered-column" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#home-carlos">
            {hoveredColumn === 1 ? (
              <div>
                <img
                  src="/static/images/Portada Villanueva.png"
                  alt=""
                  className="hovered-images"
                />
              </div>
            ) : (
              <img
                src="/static/images/Portada Villa.png"
                alt=""
                className="home-images"
              />
            )}
            </a>
          </div>
          <div
            className={`bg-white w-1/4 ${
              hoveredColumn === 2 ? "hovered-column" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#home-arte">
            {hoveredColumn === 2 ? (
              <div>
               <p className="absolute top-36 left-1/6 right-1/6 mr-32 ml-32  text-2xl	text-gray-500 text-center	">Arquitectura, <br/> Arte y Paisaje</p>
                <img
                  src="/static/images/Nubes-24.png"
                  alt=""
                  className="hovered-images"
                />
              </div>
            ) : (
              <img
                src="/static/images/mockup EVA-67 (1).png"
                alt=""
                className="home-images"
              />
            )}
            </a>
          </div>
          <div
            className={`bg-white w-1/4 ${
              hoveredColumn === 3 ? "hovered-column" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#home-eva">
            {hoveredColumn === 3 ? (
              <div>
               <p className="absolute top-36 left-1/6 right-1/6 mr-20 ml-20 text-2xl	text-gray-500 text-center	">EVA: <br/> Experiencia Virtual <br /> Arquitectonica</p>
                <img
                  src="/static/images/Pastor-24.png"
                  alt=""
                  className="hovered-images"
                />
              </div>
            ) : (
              <img
                src="/static/images/mockup EVA-68.png"
                alt=""
                className="home-images"
              />
            )}
            </a>
          </div>
        </div>
        {showSection && (
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black home-title title-home  w-screen">
            <img src="/static/images/Letras Sintesis.png" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeView;
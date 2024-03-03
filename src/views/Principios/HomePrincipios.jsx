import React, { useState } from "react";
import HeaderHome from "../../components/HeaderHome";

const HomePrincipios = () => {
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
      <HeaderHome />
      <div className="relative">
        <div className="flex flex-wrap">
        <div
            className={`bg-white w-1/6 ${
              hoveredColumn === 0 ? "hovered-column" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#materialidad">
            {hoveredColumn === 0 ? (
              <div>
                <p className="absolute top-36 left-1/6 right-1/6 mr-16 ml-16 text-2xl	text-gray-500 text-center	">Materialidad</p>
                <img
                  src="/static/images/Materialidad-59.png"
                  alt=""
                  className="principios-images-hovered"
                />
              </div>
            ) : (
              <img
                src="/static/images/mockup-EVA-76.png"
                alt=""
                className="principios-images"
              />
            )}
            </a>
          </div>
          <div
            className={`bg-white w-1/6 ${
              hoveredColumn === 1 ? "hovered-column" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >          
          <a href="#movimiento">
            {hoveredColumn === 1 ? (
              <div>
                <p className="absolute top-36 left-1/6 mr-16 ml-16 text-2xl	text-gray-500 text-center	">Movimiento</p>
                <img
                  src="/static/images/Movimiento-59.png"
                  alt=""
                  className="principios-images-hovered"
                />
              </div>
            ) : (
              <img
                src="/static/images/mockup-EVA-78.png"
                alt=""
                className="principios-images"
              />
            )}
          </a>
          </div>
          <div
            className={`bg-white w-1/6 ${
              hoveredColumn === 2 ? "hovered-column" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#quinta">
            {hoveredColumn === 2 ? (
              <div>
               <p className="absolute top-36 left-1/6 right-1/6 mr-12 ml-12  text-2xl	text-gray-500 text-center	">Quinta Fachada</p>
                <img
                  src="/static/images/5ta-Fachada-59.png"
                  alt=""
                  className="principios-images-hovered"
                />
              </div>
            ) : (
              <img
                src="/static/images/mockup-EVA-75.png"
                alt=""
                className="principios-images"
              />
            )}
            </a>
          </div>
          <div
            className={`bg-white w-1/6 ${
              hoveredColumn === 3 ? "hovered-column" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            >
            <a href="#espacio-universal">
            {hoveredColumn === 3 ? (
              <div>
               <p className="absolute top-36 left-1/6 right-1/6 mr-10 ml-10 text-2xl	text-gray-500 text-center	">Espacio Universal</p>
                <img
                  src="/static/images/Separación-de-usos-59.png"
                  alt=""
                  className="principios-images-hovered"
                />
              </div>
            ) : (
              <img
                src="/static/images/mockup-EVA-69.png"
                alt=""
                className="principios-images"
              />
            )}
            </a>
          </div>
          <div
            className={`bg-white w-1/6 ${
              hoveredColumn === 4 ? "hovered-column" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
            >
            <a href="#verde-continuo">
            {hoveredColumn === 4 ? (
              <div>
               <p className="absolute top-36 left-1/6 right-1/6 mr-10 ml-10 text-2xl	text-gray-500 text-center	">Verde Continuo</p>
                <img
                  src="/static/images/Verde-Continuo-59.png"
                  alt=""
                  className="principios-images-hovered"
                />
              </div>
            ) : (
              <img
                src="/static/images/mockup-EVA-74.png"
                alt=""
                className="principios-images"
              />
            )}
            </a>
          </div>
          <div
            className={`bg-white w-1/6 ${
              hoveredColumn === 5 ? "hovered-column" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
            >
            <a href="#separacion-usos">
            {hoveredColumn === 5 ? (
              <div>
               <p className="absolute top-36 left-1/6 right-1/6 mr-16 ml-16 text-2xl	text-gray-500 text-center	">Separacion de Usos</p>
                <img
                  src="/static/images/Separación-de-usos-59.png"
                  alt=""
                  className="principios-images-hovered"
                />
              </div>
            ) : (
              <img
                src="/static/images/mockup-EVA-77.png"
                alt=""
                className="principios-images"
              />
            )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePrincipios;
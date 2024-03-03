import React, { useState } from "react";
import Header from "../components/Header";

const FirstView = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleMouseEnter = () => {
    setZoomLevel(1.2); // Establecer el nivel de zoom cuando el mouse entra en la imagen
  };

  const handleMouseLeave = () => {
    setZoomLevel(1); // Restablecer el nivel de zoom cuando el mouse sale de la imagen
  };

  return (
    <div className="bg-neutral-500 pb-10">
      <Header />
      <div className="flex flex-col items-center pt-5 pb-5">
        <div
          className="flex flex-col items-center pt-5 pb-5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="/static/images/mockup EVA-67.png"
            alt="nubes"
            className="clouds w-1/2 sm:w-1/3 md:w-1/7 lg:w-1/8"
            style={{ transform: `scale(${zoomLevel})` }}
          />
        </div>
        <div className="absolute top-30 right-40 flex flex-col mt-10 mr-52">
          <button className="text-white px-4 py-2 mb-2">Español</button>
          <button className="text-white px-4 py-2">English</button>
        </div>
        <div className="flex flex-col items-center pt-3">
          <img
            src="/static/images/2-02.png"
            alt="descripcion"
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstView;
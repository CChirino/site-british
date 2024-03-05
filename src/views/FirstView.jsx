import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Header from "../components/Header";

const FirstView = () => {
  const [isImageHovered, setIsImageHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsImageHovered(true); // Establecer isImageHovered en true cuando el mouse entra en la imagen
  };

  const handleMouseLeave = () => {
    setIsImageHovered(false); // Establecer isImageHovered en false cuando el mouse sale de la imagen
  };

  const zoomAnimation = useSpring({
    transform: `scale(${isImageHovered ? 1.2 : 1})`,
  });

  return (
    <div className="bg-neutral-500 pb-10">
      <Header />
      <div className="flex flex-col items-center pt-5 pb-5">
        <div
          className="flex flex-col items-center pt-5 pb-5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <animated.img
            src="/static/images/mockup EVA-67.png"
            alt="nubes"
            className="clouds w-1/2 sm:w-1/3 md:w-1/7 lg:w-1/8"
            style={zoomAnimation}
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
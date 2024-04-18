import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Parallax } from "react-parallax";
import image from "/static/images/Portada Paisajismo.png";

const HomePaisaje = () => {
  const textAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-100%)" },
    delay: 500,
  });

  return (
    <div>
      <Parallax bgImage={image} strength={500}>
        <div className="bg-opacity-75 h-90vh flex justify-center items-center">
          <div className="flex">
            <div className="w-3/5">
              <div className="container pl-10 pr-10">
                <animated.h1 style={textAnimation} className="text-left">Paisaje </animated.h1>
                <animated.p style={textAnimation} className="text-left pt-5">Al momento de diseñar la Ciudad Universitaria de Caracas, Villanueva busco hacer del paisajismo un elemento compositivo. Los gramados y vegetación crean visuales durante el recorrido del campus, hay otros momentos donde los árboles y chaguaramos acompañan el recorrido de los peatones como cubiertas naturales. Los jardines forman parte de la composición de la planta de una edificación, esto es el caso del Instituto Botánico, las Facultades de Farmacia, Humanidades y Arquitectura.
                </animated.p>
              </div>
            </div>
            <div className="w-2/5 text-right">
              <div className="container pr-32 pt-32">
                  <a href="#paisajista">
                    <animated.h2 style={textAnimation}>Villanueva el paisajista</animated.h2>            
                  </a>
                  <a href="#patio">
                    <animated.h2 style={textAnimation}>Del patio de jardín colonial al bosque tropical</animated.h2>
                  </a>
                  <a href="#jardin">
                    <animated.h2 style={textAnimation}>Jardín Botánico</animated.h2>
                  </a>
                  <a href="mapa-paisaje">
                    <animated.h2 style={textAnimation}>Jardín Botánico</animated.h2>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default HomePaisaje;
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Parallax } from "react-parallax";
import image from "/static/images/EVA-03.png";

const HomeCarlosRaul = () => {
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
                <animated.h1 style={textAnimation} className="text-left">Carlos Raúl<br/>Villanueva</animated.h1>
                <animated.p style={textAnimation} className="text-left pt-5">Carlos Raúl Villanueva, Londres 1900-Caracas 1975, fue un reconocido arquitecto venezolano. Se formó en la École Beaux Arts de Paris y llegó a Venezuela a la edad de 27 años. Por las próximas cinco décadas dedicó su vida al servicio público y participó en la modernización de Venezuela, principalmente en Caracas y Maracay. Entre sus obras notables, está la Ciudad Universitaria de Caracas, los Museos de Bellas Artes y Ciencias Naturales en Caracas, el Hotel Jardín y la Plaza de Toros ambos en Maracay, una centena de bloques de viviendas obreras en distintas partes del país.
                </animated.p>
              </div>
            </div>
            <div className="w-2/5 text-right">
              <div className="container pr-32 pt-32">
                <a href="#londres">
                  <animated.h2 style={textAnimation}>Londres a Caracas</animated.h2>            
                </a>
                <a href="#hacedor">
                  <animated.h2 style={textAnimation}>Hacedor de ciudad</animated.h2>
                </a>
                <a href="#maestro">
                  <animated.h2 style={textAnimation}>Villanueva el Maestro</animated.h2>
                </a>
                <a href="#ultimos">
                  <animated.h2 style={textAnimation}>Últimos años</animated.h2>
                </a>
              </div>
          </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default HomeCarlosRaul;
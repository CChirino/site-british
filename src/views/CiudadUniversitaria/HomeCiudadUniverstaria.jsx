import React from "react";
import WhiteMenu from "../../components/WhiteMenu";
import { Parallax } from "react-parallax";
import image from "/static/images/EVA-01.png";
import { useSpring, animated } from "@react-spring/web";

const HomeCiudadUniversitaria = () => {
  const textAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-100%)" },
    delay: 500,
  });

  return (
    <div>
      <WhiteMenu />
      <Parallax bgImage={image} strength={500}>
        <div className="bg-opacity-75 h-90vh flex justify-center items-center">
          <div className="text-container">
          <animated.h1 style={textAnimation}>La Ciudad Universitaria <br/> de Caracas</animated.h1>
            <animated.p style={textAnimation}> La Ciudad Universitaria de Caracas es el actual campus de la más grande e importante universidad de Venezuela. Tiene una extensión de 161 hectáreas (incluido el Jardín Botánico de Caracas), y lo componen alrededor de cincuenta edificaciones, de distintas formas y tamaños. Entre las que se cuenta con dos estadios, el Hospital Universitario es el más grande de Latinoamérica que tiene 12 pisos, capacidad para 1.250 y una amplia cantidad de especialidades médicas. Es obra en casi su totalidad del arquitecto venezolano, Carlos Raúl Villanueva. La Ciudad Universitaria de Caracas, se construyó entre 1942 y 1972. 
            </animated.p>
          </div>
          <div className="text-container right-text">
            <a href="#contenido">
              <animated.h2 style={textAnimation}>Contenido</animated.h2>            
            </a>
            <a href="#linea-tiempo-mapa">
              <animated.h2 style={textAnimation}>Linea de Tiempo</animated.h2>
            </a>
            <a href="#ciudad-universitaria">
              <animated.h2 style={textAnimation}>Patrimonio Mundial</animated.h2>
            </a>
            <a href="#cuc-actual">
              <animated.h2 style={textAnimation}>CUC Actual</animated.h2>
            </a>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default HomeCiudadUniversitaria;
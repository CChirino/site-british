import React from "react";
import { Parallax } from "react-parallax";
import image from "/static/images/Fondo CUC-01.png";
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
      <Parallax bgImage={image} strength={500}>
        <div className="bg-opacity-75 h-90vh flex justify-center items-center">
          <div className="text-container">
          <animated.h1 style={textAnimation}>La Ciudad Universitaria <br/> de Caracas</animated.h1>
            <animated.p style={textAnimation}> La Ciudad Universitaria de Caracas es el actual campus de la más grande e importante universidad de Venezuela. Tiene una extensión de 161 hectáreas (incluido el Jardín Botánico de Caracas), y lo componen alrededor de cincuenta edificaciones, de distintas formas y tamaños. Entre las que se cuenta con dos estadios, el Hospital Universitario es el más grande de Latinoamérica que tiene 12 pisos, capacidad para 1.250 y una amplia cantidad de especialidades médicas. Es obra en casi su totalidad del arquitecto venezolano, Carlos Raúl Villanueva. La Ciudad Universitaria de Caracas, se construyó entre 1942 y 1972. 
            </animated.p>
          </div>
          <div className="text-container right-text">
            <a href="#hacienda">
              <animated.h2 style={textAnimation}>Una hacienda que se convirtió en Ciudad</animated.h2>            
            </a>
            <a href="#hospital">
              <animated.h2 style={textAnimation}>Un nuevo hospital para una Caracas Moderna </animated.h2>            
            </a>
            <a href="#modernismo">
              <animated.h2 style={textAnimation}>De Beux Arts a Modernismo</animated.h2>            
            </a>
            <a href="#post-cuc">
              <animated.h2 style={textAnimation}>La CUC post Villanueva</animated.h2>            
            </a>
            <a href="#cronologia-cuc">
              <animated.h2 style={textAnimation}>Cronología</animated.h2>
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
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Parallax } from "react-parallax";
import image from "/static/images/Portada Arquitectura.png";

const HomeArquitectura = () => {
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
                <animated.h1 style={textAnimation} className="text-left" >Arquitectura</animated.h1>
                <animated.p style={textAnimation} className="text-left pt-5" >Si bien el diseño urbano de la CUC inicio como una propuesta clásica, Villanueva dio una transformación al esquema moderno total. Todas las 55 edificaciones son un despliegue de ensayos y pruebas sobre las nociones del estilo internacional, un tratado sobre la luz y las sombras. 
                </animated.p>
                <br/> 
                <animated.p style={textAnimation} className="text-left pt-5">El campus en pleno es un juego de paralelepípedos algos verticales y otros horizontales, formas particulares, y como se interconectan unos con otros. Patios de luz, muros calados, parasoles, son parte de los recursos utilizados por Villanueva en su laboratorio de exploraciones para dar con las mejores respuestas arquitectónicas a los desafíos del clima y la modernidad caraqueña. 
                </animated.p>
              </div>
            </div>
            <div className="w-2/5 text-right">
                <div className="container pr-32 pt-32">
                  <a href="#cuc">
                    <animated.h2 style={textAnimation}>El diseño de la CUC</animated.h2>            
                  </a>
                  <a href="#bloques">
                    <animated.h2 style={textAnimation}>Bloques Horizontales</animated.h2>
                  </a>
                  <a href="#bloques-2">
                    <animated.h2 style={textAnimation}>Bloques verticales</animated.h2>
                  </a>
                  <a href="#piezas">
                    <animated.h2 style={textAnimation}>Piezas singulares</animated.h2>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default HomeArquitectura;
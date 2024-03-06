import React from "react";
import image from "/static/images/IMG_0094.png";
import { Parallax } from "react-parallax";
import { useSpring, animated } from "@react-spring/web";


const ArquitecturaMapa = () => {
    const textAnimation = useSpring({
      opacity: 1,
      transform: "translateX(0)",
      from: { opacity: 0, transform: "translateX(-100%)" },
      delay: 500,
    });

  return (
    <div>
      <div className="bg-zinc-600 pb-10 pt-10">
        <div className="flex ">
            <div className="w-2/5">
                <div className="container  pt-5 pl-10 pr-10">
                    <h1>Facultad de Arquitectura<br/> y Urbanismo</h1>
                    <img src="/static/images/Facultad de Arquitectura-Mural de Alejandro Otero.jpg"  className="h-1/2 pb-5  pt-5" alt="" />
                    <a className=" mt-5 underline" href="#facultad-arquitectura" > Conoce mas</a>
                </div>
            </div>
            <div className="w-3/5 text-neutral-500 text-left">
                <img src="/static/images/mapa-arquitectura.png"  className=" pb-5 pt-16" alt="" />
            </div>
        </div>
      </div>
        <Parallax bgImage={image} strength={100}>
            <div className="bg-opacity-75 h-90vh flex justify-center items-center" id="facultad-arquitectura">
                <div className="flex ">
                    <div className="w-3/5">
                        <div className="container  pl-10 pr-10">
                            <animated.h1 style={textAnimation} className="text-left">Facultad de Arquitectura<br/> y Urbanismo</animated.h1>
                            <animated.p  style={textAnimation} className="text-left pt-5">El campus en pleno es un juego de paralelepípedos algos verticales y otros horizontales, formas particulares, y como se interconectan unos con otros. Patios de luz, muros calados, parasoles, son parte de los recursos utilizados por Villanueva en su laboratorio de exploraciones para dar con las mejores respuestas arquitectónicas a los desafíos del clima y la modernidad caraqueña.
                            </animated.p>
                        </div>
                    </div>
                    <div className="w-2/5 text-neutral-500 text-left">
                        <animated.img  style={textAnimation} src="/static/images/facultad-arquitectura.jpeg"  className=" pb-5  pr-10 pt-16" alt="" />
                    </div>
                </div>
            </div>
        </Parallax>
    </div>
  );
};

export default ArquitecturaMapa;
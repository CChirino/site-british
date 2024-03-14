import React from "react";
import image from "/static/images/IMG_0094.png";
import { Parallax } from "react-parallax";
import { useSpring, animated } from "@react-spring/web";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


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
                <img src="/static/images/mapa-arquitectura.png"  className=" pb-5 pt-16 pr-5" alt="" />
            </div>
        </div>
      </div>
        <Parallax bgImage={image} strength={100}>
            <div className="bg-opacity-75 h-90vh flex justify-center items-center" id="facultad-arquitectura">
                <div className="flex ">
                    <div className="w-3/5 pl-12">
                        <div className="container  pt-10 pl-10">
                            <animated.h2 style={textAnimation} className="text-left">Facultad de Arquitectura<br/> y Urbanismo</animated.h2>
                            <div className="flex">
                                <div className="w-1/2">
                                    <animated.p  style={textAnimation} className="text-left pt-5"> Proyecto : 1954 - 1956</animated.p>
                                    <animated.p  style={textAnimation} className="text-left"> Construccion : 1954 - 1956</animated.p>
                                </div>
                                <div className="w-1/2">
                                    <animated.p  style={textAnimation} className="text-left pt-5"> Uso original : Educacional</animated.p>
                                    <animated.p  style={textAnimation} className="text-left"> Uso actual : Educacional</animated.p>
                                    <img src="/static/images/Ficha de Prueba-03.png" alt="" className=" pr-12" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 text-neutral-500 text-left">
                        <animated.img  style={textAnimation} src="/static/images/facultad-arquitectura.jpeg"  className=" pb-5  pr-10 pt-16 height-map-image" alt="" />
                    </div>
                </div>
            </div>
        </Parallax>
        <div className="w-full">
            <Carousel>
                <div>
                <img src="/static/images/EVA-01.png" alt="Image 1" />
                <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="/static/images/EVA-03.png" alt="Image 2" />
                <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="/static/images/EVA-04.png" alt="Image 3" />
                <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    </div>
  );
};

export default ArquitecturaMapa;
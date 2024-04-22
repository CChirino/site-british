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
    <div id="mapa-arquitectura">
        <Parallax bgImage={image} strength={100}>
            <div className="bg-opacity-75 h-90vh flex justify-center items-center" id="facultad-arquitectura">
                <div className="flex ">
                    <div className="w-3/5 pl-12">
                        <div className="container  pt-10 pl-10">
                            <animated.h2 style={textAnimation} className="text-left">Facultad de Arquitectura<br/> y Urbanismo</animated.h2>
                            <div className="flex">
                                <div className="w-1/2">
                                    <animated.p   className="text-left pt-5"> Proyecto : 1954 - 1956</animated.p>
                                    <animated.p   className="text-left image-card-map"> Construccion : 1954 - 1956</animated.p>
                                    <animated.p   className="text-left"> Ingenieros:</animated.p>
                                    <animated.p   className="text-left image-card-map"> R. Kaltenstadler</animated.p>
                                    <animated.p   className="text-left image-card-map"> A. Kravtchemko</animated.p>
                                    <animated.p   className="text-left image-card-map"> L. Arocha</animated.p>
                                    <animated.p   className="text-left"> Dibujantes:</animated.p>
                                    <animated.p   className="text-left image-card-map"> L.J.V. Brkich</animated.p>
                                    <animated.p   className="text-left image-card-map"> Adele F. Lodi</animated.p>
                                    <animated.p   className="text-left image-card-map"> L. Tarasov, M.B.</animated.p>
                                    <animated.p   className="text-left image-card-map"> Carlos Escalona</animated.p>
                                    <animated.p   className="text-left image-card-map"> L. Bello</animated.p>
                                    <animated.p   className="text-left image-card-map"> F. de Llano</animated.p>
                                    <animated.p   className="text-left image-card-map"> L. D’ Leon</animated.p>
                                    <animated.p   className="text-left image-card-map"> R. Ulloa</animated.p>
                                    <animated.p   className="text-left image-card-map"> G. Reyes F</animated.p>
                                    <animated.p   className="text-left image-card-map"> G. Pérez Peña</animated.p>
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
                <img src="/static/images/galeria-4.jpeg" alt="Image 2" />
                </div>
                <div>
                <img src="/static/images/galeria-5.jpeg" alt="Image 3" />
                </div>
                <div>
                <img src="/static/images/galeria-6.jpeg" alt="Image 4" />
                </div>
            </Carousel>
        </div>
        <Parallax bgImage={image} strength={100}>
            <div className="bg-opacity-75 h-90vh flex justify-center items-center" id="facultad-arquitectura">
                <div className="flex ">
                    <div className="w-1/2 pl-12">
                        <div className="container  pt-10 pl-10">
                            <animated.p   className="text-left pt-5">
                            El edificio de la Facultad de Arquitectura y Urbanismo reúne dos temas, el cuerpo horizontal, con las zonas comunes y el taller, resuelto en una sucesión de espacios cambiantes, y la torre que alberga las aulas. Desde el exterior, la variedad y complejidad de sus volúmenes expresa la creación de formas abstractas que caracteriza la obra de Villanueva en este período.
                            </animated.p>
                            <animated.p   className="text-left pt-5">
                            Se compone a partir de dos ejes perpendiculares establecidos por pasillos cubiertos que permiten el acceso. El recorrido desde estos pasillos y a lo largo de toda una planta baja constituye una experiencia incomparable. Los espacios cambian constantemente a través de diferentes niveles en los techos, los lucernarios, el movimiento de los muros de bloques macizos o huecos y las obras de arte que los acompañan. La variedad de cubiertas en los talleres de planta libre demuestra el interés de Villanueva por experimentar con estructuras. El auditorio y la sala de exposiciones son el punto culminante del recorrido, con las rampas, cubiertas, murales y móviles, a través de los cuales se archiva un espacio de sorprendente dinamismo.
                            </animated.p>
                        </div>
                    </div>
                    <div className="w-1/2 text-left">
                        <div className="container  pt-10 pl-10">
                            <animated.p   className="text-left pt-5">
                            La torre alta es uno de los hitos verticales de todo el conjunto. Aloja las aulas en un volumen de planta rectangular y estructura porticada que se dinamiza mediante elementos destacados y articulados: el cuerpo de los ascensores y la escalera principal, las cubiertas plegadas en la terraza y la escalera de emergencia como elemento escultórico y transparente. . Las fachadas norte y sur están protegidas por parasoles de hormigón y bloques huecos, cuyo ritmo tridimensional, asociado a la estructura, produce un efecto de gran belleza. Las fachadas más estrechas, hacia el este y el oeste, las direcciones de mayor golpe de calor, son ciegas y muestran la presencia constante del arte como parte integral de la concepción arquitectónica, con el mural de Alejandro Otero.
                            </animated.p>
                            <animated.p   className="text-left pt-5">
                            El edificio ha sido señalado en numerosas ocasiones como uno de los ejemplos más importantes de la arquitectura moderna. En 1962 Umberto Eco, al desarrollar la idea de Opera aperta para explicar la cambiante poética propia del arte contemporáneo, la eligió como ejemplo en una cita de Bruno Zevi: una scuola da inventare ogni giorno. 
                            </animated.p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    </div>
  );
};

export default ArquitecturaMapa;
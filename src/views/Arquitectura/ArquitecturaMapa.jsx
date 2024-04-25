import React from "react";
import image from "/static/images/FAU-01.png";
import { Parallax } from "react-parallax";
import { useSpring, animated } from "@react-spring/web";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const ArquitecturaMapa = () => {
    const textAnimation = useSpring({
      opacity: 1,
      transform: "translateX(0)",
      from: { opacity: 0, transform: "translateX(-100%)" },
      delay: 1000,
    });

  return (
    <div id="mapa-arquitectura">
        <div>
            <Parallax bgImage={image} strength={100} >
                <div className="bg-opacity-75 h-90vh flex justify-center items-center" id="facultad-arquitectura">
                    <div className="flex ">
                        <div className="w-3/6 pl-5">
                            <div className="container  pt-10 pl-4">
                                <h2 className="text-left ">Facultad de Arquitectura y Urbanismo </h2>
                                <h2 className="text-left ">Sector VI </h2>
                                <div className="flex">
                                    <div className="w-1/2">
                                        <h2 className="text-left text-section pt-2">Ficha Tecnica </h2>
                                        <p   className="text-left pt-2  text-section"> Proyecto : 1954 - 1956</p>
                                        <p   className="text-left text-section"> Construccion : 1954 - 1956</p>
                                        <p   className="text-left text-section"> Ingenieros:</p>
                                        <p   className="text-left image-card-map text-section"> R. Kaltenstadler</p>
                                        <p   className="text-left image-card-map text-section"> A. Kravtchemko</p>
                                        <p   className="text-left image-card-map text-section"> L. Arocha</p>
                                        <p   className="text-left text-section"> Dibujantes:</p>
                                        <p   className="text-left image-card-map text-section"> L.J.V. Brkich</p>
                                        <p   className="text-left image-card-map text-section"> Adele F. Lodi</p>
                                        <p   className="text-left image-card-map text-section"> L. Tarasov, M.B.</p>
                                        <p   className="text-left image-card-map text-section"> Carlos Escalona</p>
                                        <p   className="text-left image-card-map text-section"> L. Bello</p>
                                        <p   className="text-left image-card-map text-section"> F. de Llano</p>
                                        <p   className="text-left image-card-map text-section"> L. D’ Leon</p>
                                        <p   className="text-left image-card-map text-section"> R. Ulloa</p>
                                        <p   className="text-left image-card-map text-section"> G. Reyes F</p>
                                        <p   className="text-left image-card-map text-section"> G. Pérez Peña</p>
                                    </div>
                                    <div className="w-1/2">
                                        <p className="text-left pt-5"> Uso original : Educacional</p>
                                        <p className="text-left"> Uso actual : Educacional</p>
                                        <img src="/static/images/Ficha de Prueba-03.png" alt="" className=" mr-24 mt-5 w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/6 text-neutral-500 text-left">
                            <img src="/static/images/facultad-arquitectura.jpeg"  className=" pb-5  pl-10 pr-10 pt-16 height-map-image" alt="" />
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
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
                            <animated.p   className="text-left pt-5 text-section">
                            El edificio de la Facultad de Arquitectura y Urbanismo reúne dos temas, el cuerpo horizontal, con las zonas comunes y el taller, resuelto en una sucesión de espacios cambiantes, y la torre que alberga las aulas. Desde el exterior, la variedad y complejidad de sus volúmenes expresa la creación de formas abstractas que caracteriza la obra de Villanueva en este período.
                            </animated.p>
                            <animated.p   className="text-left pt-5 text-section">
                            Se compone a partir de dos ejes perpendiculares establecidos por pasillos cubiertos que permiten el acceso. El recorrido desde estos pasillos y a lo largo de toda una planta baja constituye una experiencia incomparable. Los espacios cambian constantemente a través de diferentes niveles en los techos, los lucernarios, el movimiento de los muros de bloques macizos o huecos y las obras de arte que los acompañan. La variedad de cubiertas en los talleres de planta libre demuestra el interés de Villanueva por experimentar con estructuras. El auditorio y la sala de exposiciones son el punto culminante del recorrido, con las rampas, cubiertas, murales y móviles, a través de los cuales se archiva un espacio de sorprendente dinamismo.
                            </animated.p>
                        </div>
                    </div>
                    <div className="w-1/2 text-left">
                        <div className="container  pt-10 pl-10">
                            <animated.p   className="text-left pt-5 text-section">
                            La torre alta es uno de los hitos verticales de todo el conjunto. Aloja las aulas en un volumen de planta rectangular y estructura porticada que se dinamiza mediante elementos destacados y articulados: el cuerpo de los ascensores y la escalera principal, las cubiertas plegadas en la terraza y la escalera de emergencia como elemento escultórico y transparente. . Las fachadas norte y sur están protegidas por parasoles de hormigón y bloques huecos, cuyo ritmo tridimensional, asociado a la estructura, produce un efecto de gran belleza. Las fachadas más estrechas, hacia el este y el oeste, las direcciones de mayor golpe de calor, son ciegas y muestran la presencia constante del arte como parte integral de la concepción arquitectónica, con el mural de Alejandro Otero.
                            </animated.p>
                            <animated.p   className="text-left pt-5 text-section">
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
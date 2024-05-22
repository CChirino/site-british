import React from "react";
import image from "/static/images/FAU-01.png";
import { Parallax } from "react-parallax";
import { useSpring, animated } from "@react-spring/web";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const FichaFacultadHumanidades = () => {
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
                <div className="bg-opacity-75 h-100vh flex justify-center items-center" id="facultad-arquitectura">
                    <div className="flex ">
                        <div className="w-3/6 pl-5">
                            <div className="container  pt-10 pl-4">
                                <h2 className="text-left ">Facultad de Humanidades </h2>
                                <div className="flex">
                                    <div className="w-full">
                                        <h2 className="text-left text-section pt-2">Ficha Tecnica </h2>
                                        <p   className="text-left pt-2  text-section"> Proyecto : 1954 - 1956</p>
                                        <p   className="text-left text-section"> Construccion : 1954 - 1956</p>
                                        <h2   className="text-left text-section font-bold"> Uso original : Educacional</h2>
                                        <h2   className="text-left text-section font-bold"> Uso actual : Educacional</h2>
                                        <h2   className="text-left text-section font-bold"> Arquitecto:</h2>
                                        <h2   className="text-left text-section font-bold"> Carlos Raúl Villanueva</h2>
                                        <h2   className="text-left text-section font-bold"> Ingenieros:</h2>
                                        <p   className="text-left image-card-map text-section"> R. Kaltenstadler</p>
                                        <p   className="text-left image-card-map text-section"> Hiedra</p>
                                        <h2   className="text-left text-section font-bold"> Dibujantes:</h2>
                                        <p   className="text-left image-card-map text-section"> L. de León</p>
                                        <p   className="text-left image-card-map text-section"> A. Flodi</p>
                                        <p   className="text-left image-card-map text-section"> L.J.V. Brkich</p>
                                        <p   className="text-left image-card-map text-section"> Mario Briceño</p>
                                        <p   className="text-left image-card-map text-section"> Rupérez</p>
                                        <p   className="text-left image-card-map text-section"> Escalona</p>
                                        <p   className="text-left image-card-map text-section"> Isabel Mora</p>
                                        <p   className="text-left image-card-map text-section"> F. Sch</p>
                                        <p   className="text-left image-card-map text-section"> Jakovlev</p>
                                        <p   className="text-left image-card-map text-section"> Escobar</p>
                                        <p   className="text-left image-card-map text-section"> Gladys Pérez Peña</p>
                                        <p   className="text-left image-card-map text-section"> R. Velasco</p>
                                        <p   className="text-left image-card-map text-section"> Bellucci</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/6 text-neutral-500 text-left">
                            <img src="/static/images/fichas/facultad-humanidades/PM0308.jpg"  className=" pb-5  pl-10 pr-10 pt-16 height-map-image" alt="" />
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
        <div className="w-full">
            <Carousel>
                <div>
                <img src="/static/images/fichas/facultad-humanidades/020408.jpg" alt="Image 2" />
                </div>
                <div>
                <img src="/static/images/fichas/facultad-humanidades/030204.jpg" alt="Image 3" />
                </div>
                <div>
                <img src="/static/images/fichas/facultad-humanidades/PM0301.jpg" alt="Image 4" />
                </div>
                <div>
                <img src="/static/images/fichas/facultad-humanidades/PM0303.jpg" alt="Image 5" />
                </div>
                <div>
                <img src="/static/images/fichas/facultad-humanidades/PM0304.jpg" alt="Image 6" />
                </div>
                <div>
                <img src="/static/images/fichas/facultad-humanidades/PM0307.jpg" alt="Image 7" />
                </div>
            </Carousel>
        </div>
        <div  style={{ backgroundImage: `url('/static/images/Fondo-01.png')`, backgroundPosition: 'center bottom', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="flex  pb-12">
                    <div className="w-1/2 pl-12">
                        <div className="container">
                            <h3 className="text-center subtitle-section  pt-12">Subtitulo </h3>
                            <animated.p   className="text-left pt-5 text-section">
                            La Facultad de Humanidades, que alberga otras facultades de psicología, derecho, sociología y educación, es reconocida dentro del conjunto de la Ciudad Universitaria como una muestra especial del ideario moderno, donde el respeto total a la escala humana es la principal idea generadora.                            
                            </animated.p>
                            <animated.p   className="text-left pt-5 text-section">
                            Compuesto por un ensamblaje de volúmenes bajos, está conformado por una alternancia de sólidos y vacíos que, haciendo referencia a la arquitectura colonial, permite la interacción de las aulas, los servicios administrativos y el auditorio, todos ubicados en diferentes cuerpos, separados por pequeños patios que aparecen durante el tránsito por los pasillos.
                            </animated.p>
                            <animated.p   className="text-left pt-5 text-section">
                            Estos están provistos de celosías de concreto que garantizan la frescura del espacio interno y un adecuado tratamiento de la luz tropical. Es innegable la forma como se aprovechan el clima, la luz y la vegetación, y es esa misma búsqueda del control ambiental lo que producirá la ambigüedad entre el interior y el exterior, sobre todo cuando el aula, en la planta baja y en el nivel superior, se abren e integran a través de balcones al sistema de jardines que marca el límite entre el conjunto humanista y los pasillos de la Ciudad Universitaria                            </animated.p>
                            <animated.p   className="text-left pt-5 text-section">
                            Por otro lado, el alarde tecnológico se expresa a través de las audaces rampas y escaleras, los muros plegados del auditorio y la curvatura de las cubiertas que permiten apreciar su valor plástico además de expresar la versatilidad estructural del hormigón.
                            </animated.p>
                        </div>
                    </div>
                    <div className="w-1/2 text-left">
                        <div className="container  pt-10 pl-10">
                        </div>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default FichaFacultadHumanidades;
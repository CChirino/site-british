import React from "react";
import image from "/static/images/FAU-01.png";
import { Parallax } from "react-parallax";
import { useSpring, animated } from "@react-spring/web";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const FichaBibliotecaCentral = () => {
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
                <div className="bg-opacity-75 h-100vh flex" id="facultad-arquitectura">
                    <div className="flex ">
                        <div className="w-3/6 pl-5">
                            <div className="container  pt-10 pl-4">
                                <h2 className="text-left ">Biblioteca Central </h2>
                                <div className="flex">
                                    <div className="w-full">
                                        <h2 className="text-left text-section pt-2">Ficha Tecnica </h2>
                                        <p   className="text-left pt-2  text-section"> Proyecto : 1952-1953</p>
                                        <p   className="text-left text-section"> Construccion : 1954 - 1956</p>
                                        <h2   className="text-left text-section font-bold"> Uso original : Educacional, Institucional </h2>
                                        <h2   className="text-left text-section font-bold"> Uso actual : Educacional, Institucional </h2>
                                        <h2   className="text-left text-section font-bold"> Arquitecto:</h2>
                                        <h2   className="text-left text-section font-bold"> Carlos Raúl Villanueva</h2>
                                        <h2   className="text-left text-section font-bold"> Dibujantes:</h2>
                                        <p   className="text-left image-card-map text-section"> R. Golding</p>
                                        <p   className="text-left image-card-map text-section"> L. Bello</p>
                                        <p   className="text-left image-card-map text-section"> L. Tarasov</p>
                                        <p   className="text-left image-card-map text-section"> N. Tapenes</p>
                                        <p   className="text-left image-card-map text-section"> J. Ruperez</p>
                                        <p   className="text-left image-card-map text-section"> E.C</p>
                                        <p   className="text-left image-card-map text-section"> A.F.L</p>
                                        <p   className="text-left image-card-map text-section"> I.T. Mora</p>
                                        <p   className="text-left image-card-map text-section"> F. del Llano</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/6 text-neutral-500 text-left">
                            <img src="/static/images/fichas/biblioteca-central/V030307.JPG"  className=" pb-5  pl-10 pr-10 pt-16 height-map-image" alt="" />
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
        <div className="w-full">
            <Carousel>
                <div>
                <img src="/static/images/fichas/biblioteca-central/010107.jpg" alt="Image 2" />
                </div>
                <div>
                <img src="/static/images/fichas/biblioteca-central/010203.jpg" alt="Image 4" />
                </div>
            </Carousel>
        </div>
        <div  style={{ backgroundImage: `url('/static/images/Fondo-01.png')`, backgroundPosition: 'center bottom', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="flex  pb-12">
                    <div className="w-1/2 pl-12">
                        <div className="container">
                            <h3 className="text-center subtitle-section  pt-12">Subtitulo </h3>
                            <animated.p   className="text-left pt-5 text-section">
                            La biblioteca finaliza, hacia el sur, el recorrido por el espacio del Centro Cultural Directivo iniciado en la Plaza del Rectorado. Se compone de dos volúmenes: la torre destinada a librería y oficinas y el volumen bajo de la sala de lectura.
                            </animated.p>
                            <animated.p   className="text-left pt-5 text-section">
                            La torre es uno de los elementos verticales que se proyectan sobre los jardines y que caracterizan el conjunto de la Ciudad Universitaria. Su fachada ciega, con balcones y ventanas de las oficinas de arriba, está cubierta con tejas rojas, dejando ver la estructura de hormigón armado. De esta manera, este gran paralelepípedo rojo, aunque no sea obra mural de un artista, es uno de los elementos principales en la búsqueda de la integración del color y las formas abstractas en la arquitectura y los espacios urbanos. Y, como parte de las propuestas del arte de vanguardia, también se relaciona, como expresa Sibyl Moholy-Nagy, con los colores mismos de nuestra arquitectura tradicional: “El color es un elemento muy tradicional en la arquitectura sudamericana y en ninguna parte las paredes de las casas están Pintó más brillante y alegre que en Venezuela”. (Sibyl Moholy-Nagy 1999 p.126)
                            </animated.p>
                            <animated.p   className="text-left pt-5 text-section">
                            El volumen bajo de la Sala de Lectura, articulado a la torre, sobresale hacia el espacio abierto Tierra de Nadie, ofreciendo compañía a la escultura arquitectónica de la Sala de Conciertos y Aula Magna. Frente a éstas, de fachadas ciegas o con pequeños ventanales, la Sala de Lectura presenta una gran fachada acristalada que se abre a los balcones que protegen el interior de la influencia climática. Por la noche, como una lámpara, muestra su transparencia iluminada al jardín.
                            </animated.p>
                            <animated.p   className="text-left pt-5 text-section">
                            El acceso a toda la biblioteca, desde el gran espacio diáfano que comunica con la Plaza Cubieta, es un vestíbulo de doble altura archivado mediante el levantamiento de la torre sobre columnas. Comparte este espacio una de las grandes obras de arte que integra el museo vivo y abierto que es la Ciudad Universitaria de Caracas. Este es el vitral que Fernand Léger creó especialmente para ella “Nunca antes y nunca después Léger fue tan elegante en sus formas, tan armonioso en su composición, feliz resultado de su amistad mutuamente creativa con Villanueva” (Sibyl Moholy-Nagy 1999 p.127)
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

export default FichaBibliotecaCentral;
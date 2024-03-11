import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Parallax } from "react-parallax";
import image from "/static/images/Portada Arte.png";

const HomeArte = () => {
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
                <animated.h1 style={textAnimation} className="text-left">Arte </animated.h1>
                <animated.p style={textAnimation} className="text-left pt-5" >Por su formación profesional en la París de los años veinte, Villanueva se vio rodeado de un mar de corrientes artísticas, esto le hizo comprender a una temprana edad el poder de las expresiones artísticas, no solo de la arquitectura en la vida de las ciudades, por ello desde el primer momento busco incorporar expresiones de arte al diseño general de la CUC. Empezando tímidamente con la intervención de Mateo Manaure a la fachada del hospital universitario, como la incorporación de murales que definen limites espaciales como en el caso de Humanidades o la Plaza Cubierta.
                </animated.p>
                <br/> 
                <animated.p style={textAnimation} className="text-left pt-5">La variedad de artistas en cuanto a su origen también se traduce a una variedad de técnicas y formatos. La Colección titulada “síntesis de las artes” esta conformada por 107 piezas.
                </animated.p>
              </div>
            </div>
            <div className="w-2/5 text-right">
              <div className="container pr-32 pt-32">
                  <a href="#coleccion">
                    <animated.h2 style={textAnimation}>La colección</animated.h2>            
                  </a>
                  <a href="#pertinencia">
                    <animated.h2 style={textAnimation}>La pertinencia del arte</animated.h2>
                  </a>
                  <a href="#artistas">
                    <animated.h2 style={textAnimation}>Los artistas disidentes</animated.h2>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default HomeArte;
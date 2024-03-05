import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import image from "/static/images/Portada Arte.png"

const ArteSintesisArtes = () => {
  return (
    <div>
      <Parallax bgImage={image} strength={300}>
        <div className="bg-opacity-75 h-90vh flex justify-center items-center">
          <div className="text-container">
            <h1>Arte </h1>
            <p>Por su formación profesional en la París de los años veinte, Villanueva se vio rodeado de un mar de corrientes artísticas, esto le hizo comprender a una temprana edad el poder de las expresiones artísticas, no solo de la arquitectura en la vida de las ciudades, por ello desde el primer momento busco incorporar expresiones de arte al diseño general de la CUC. Empezando tímidamente con la intervención de Mateo Manaure a la fachada del hospital universitario, como la incorporación de murales que definen limites espaciales como en el caso de Humanidades o la Plaza Cubierta.
            </p>
            <br/> 
            <p>La variedad de artistas en cuanto a su origen también se traduce a una variedad de técnicas y formatos. La Colección titulada “síntesis de las artes” esta conformada por 107 piezas.
          </p>
          <div className="mt-6 underline	">
              <Link
                to="/arte">
                Conoce más
              </Link>        
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ArteSintesisArtes;
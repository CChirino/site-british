import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import image from "/static/images/Portada Paisajismo.png"

const PaisajismoSintesisArtes = () => {
  return (
    <div>
      <Parallax bgImage={image} strength={300}>
        <div className="bg-opacity-75 h-90vh flex justify-center items-center">
          <div className="text-container">
            <h1>Paisaje </h1>
            <p>Al momento de diseñar la Ciudad Universitaria de Caracas, Villanueva busco hacer del paisajismo un elemento compositivo. Los gramados y vegetación crean visuales durante el recorrido del campus, hay otros momentos donde los árboles y chaguaramos acompañan el recorrido de los peatones como cubiertas naturales. Los jardines forman parte de la composición de la planta de una edificación, esto es el caso del Instituto Botánico, las Facultades de Farmacia, Humanidades y Arquitectura.
            </p>
            <div className="mt-6 underline	">
              <Link
                to="/paisaje">
                Conoce más
              </Link>  
          </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default PaisajismoSintesisArtes;
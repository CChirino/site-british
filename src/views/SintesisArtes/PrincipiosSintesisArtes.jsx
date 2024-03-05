import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import image from "/static/images/Portada Principios.png"

const PrincipiosSintesisArtes = () => {
  return (
    <div>
      <Parallax bgImage={image} strength={300}>
      <div className="bg-opacity-75 h-90vh flex justify-center items-center">
        <div className="text-container">
          <h1>Principios de Diseño de la Ciudad Universitaria de Caracas </h1>
          <p>Durante las tres décadas que conllevaron para Villanueva el diseño y construcción de la CUC, hubo temas e intereses los cuales siempre puso en practica en mayor o menor medida experimentando y comprobando sus resultados. Estos son principios comunes del movimiento moderno internacional que el autor busco aplicar y desarrollar bajo las posibilidades y complejidades de una ciudad en el trópico, fueron su guía para dar un sentido de unidad a todo el conjunto.
          </p>
          <div className="mt-6 underline	">
            <Link
              to="/principios">
              Conoce más
            </Link>  
        </div>
        </div>
      </div>
      </Parallax>
    </div>
  );
};

export default PrincipiosSintesisArtes;
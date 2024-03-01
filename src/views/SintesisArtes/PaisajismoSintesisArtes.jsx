import React from "react";
import { Link } from "react-router-dom";

const PaisajismoSintesisArtes = () => {
  return (
    <div>
      <div className="background-container-paisaje">
        <div className="text-container">
          <h1>Paisajismo </h1>
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
    </div>
  );
};

export default PaisajismoSintesisArtes;
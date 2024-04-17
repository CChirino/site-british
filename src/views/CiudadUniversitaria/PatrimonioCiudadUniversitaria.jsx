import React, { useState } from "react";
import PatrimonioSeccionCiudadUniversitaria from "./PatrimonioSeccionCiudadUniversitaria";

const PatrimonioCiudadUniversitaria = () => {
  const [showPatrimonioSeccion, setShowPatrimonioSeccion] = useState(false);

  const handleClick = () => {
    setShowPatrimonioSeccion(true);
  };

  return (
    <div id="ciudad-universitaria">
      <div className="background-container-patrimonio pt-10">
        <div className="text-container">
          <h1>Un Patrimonio Mundial  <br/> en Caracas</h1>
          <p> Construida entre 1940 y 1960 con arreglo a un proyecto del arquitecto Carlos Raúl Villanueva, la ciudad universitaria de Caracas es un ejemplo excepcional de la arquitectura moderna. El campus comprende un gran número de construcciones y edificios agrupados en un conjunto funcional y bien estructurado, cuyo valor es realzado por obras maestras de la arquitectura y las artes plásticas modernas como la plaza cubierta, el estadio olímpico y el aula magna, ornamentada con la escultura “Las Nubes” de Alexander Calder.
          </p>
          <div className="mt-16 underline pb-16">
              <a href="#patrimonio" onClick={handleClick}>Conoce más</a>
          </div>
        </div>
      </div>
      {showPatrimonioSeccion && <PatrimonioSeccionCiudadUniversitaria />}
    </div>
  );
};

export default PatrimonioCiudadUniversitaria;
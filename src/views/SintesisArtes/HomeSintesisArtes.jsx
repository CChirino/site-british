import React from "react";
import { Parallax } from "react-parallax";
import image from "/static/images/EVA-04.png";


const HomeSintesisArtes = () => {
  return (
    <div>
      <Parallax bgImage={image} strength={500}>
      <div className="bg-opacity-75 h-90vh flex justify-center items-center">
        <div className="text-container">
          <h1>Arquitectura, Arte y <br/> Paisaje</h1>
          <p>La CUC es un organismo arquitectónico-escultórico-pictórico por lo cual su comprensión pasa por entender los distintos elementos macro que la conforman y generan la síntesis que la caracteriza, desde su conformación urbana y paisajística que le da un sentido, la definición arquitectónica de volúmenes interconectados por caminerías y corredores cubiertos, la presencia e integración de piezas artísticas que le dan un sentido cívico y cultural para la exaltación humana.
</p>
          <br/> 
          <p>Es la sumatoria de todos estos elementos, cada una de las situaciones que generan, las que hacen de la Ciudad Universitaria de Caracas, un echo construido sui generis único en el mundo. 
         </p>
        </div>
      </div>
      </Parallax>
    </div>
  );
};

export default HomeSintesisArtes;
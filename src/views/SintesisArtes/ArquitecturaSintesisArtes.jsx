import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import image from "/static/images/Portada Arquitectura.png";

const ArquitecturaSintesisArtes = () => {
  return (
    <div>
      <Parallax bgImage={image} strength={300}>
      <div className="bg-opacity-75 h-90vh flex justify-center items-center">
        <div className="text-container">
          <h1>Arquitectura</h1>
          <p>Si bien el diseño urbano de la CUC inicio como una propuesta clásica, Villanueva dio una transformación al esquema moderno total. Todas las 55 edificaciones son un despliegue de ensayos y pruebas sobre las nociones del estilo internacional, un tratado sobre la luz y las sombras. </p>
          <br/> 
          <p>El campus en pleno es un juego de paralelepípedos algos verticales y otros horizontales, formas particulares, y como se interconectan unos con otros. Patios de luz, muros calados, parasoles, son parte de los recursos utilizados por Villanueva en su laboratorio de exploraciones para dar con las mejores respuestas arquitectónicas a los desafíos del clima y la modernidad caraqueña. 
         </p>
        <div className="mt-6 underline	">
            <Link
              to="/arquitectura">
              Conoce más
            </Link>
        </div>
        </div>
      </div>
      </Parallax>
    </div>
  );
};

export default ArquitecturaSintesisArtes;
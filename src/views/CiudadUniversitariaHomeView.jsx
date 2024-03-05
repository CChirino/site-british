import React from "react";
import WhiteMenu from "../components/WhiteMenu";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import image from "/static/images/EVA-01.png";


const CiudadUniversitariaHomeView = () => {
  return (
    <div id="home-ciudad">
      <Parallax bgImage={image} strength={500}>
        <div className="bg-opacity-75 h-90vh flex justify-center items-center">
          <div className="text-container">
            <h1>La Ciudad Universitaria <br/> de Caracas</h1>
            <h2 className="pb-4">La utopía moderna construida</h2>
            <p>“La Ciudad Universitaria es la utopía moderna construida. Representa el anhelo por alcanzar un mundo ideal de perfección para una sociedad y un hombre nuevos… propone la realización de un mundo ideal de belleza y poesía, donde las formas y estructuras expresan el espíritu de los nuevos tiempos, y donde las artes pasan a formar parte esencial del lugar habitado por los hombres.”</p>
            <span >María Fernanda Jaua. Ciudad Universitaria de Caracas: La construcción de una utopía moderna.</span>
            <div className="mt-16 underline pb-16">
              <Link to="/ciudad-universitaria">Conoce más</Link>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default CiudadUniversitariaHomeView;
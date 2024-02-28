import React from "react";
import WhiteMenu from "../components/WhiteMenu";
import FooterHome from "../components/FooterHome";

const CiudadUniversitariaHomeView = () => {
  return (
    <div>
      <WhiteMenu />
      <div className="background-container-city pt-10">
        <div className="text-container">
          <h1>La Ciudad Universitaria <br/> de Caracas</h1>
          <h2 className="pb-4">La utopía moderna construida</h2>
          <p>“La Ciudad Universitaria es la utopía moderna construida. Representa el anhelo por alcanzar un mundo ideal de perfección para una sociedad y un hombre nuevos… propone la realización de un mundo ideal de belleza y poesía, donde las formas y estructuras expresan el espíritu de los nuevos tiempos, y donde las artes pasan a formar parte esencial del lugar habitado por los hombres.”</p>
          <span clas>María Fernanda Jaua. Ciudad Universitaria de Caracas: La construcción de una utopía moderna.</span>
          <div className="mt-20 underline	">
            <a href=""> Conoce más</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CiudadUniversitariaHomeView;
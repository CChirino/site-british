import React from "react";
import WhiteMenu from "../components/WhiteMenu";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import image from "/static/images/EVA-03.png";


const CarlosHomeView = () => {
  return (
    <div id="home-carlos">
      <Parallax bgImage={image} strength={500}>
      <div className="bg-opacity-75 h-90vh flex justify-center items-center">
        <div className="text-container">
          <h1>Carlos Raúl <br/> Villanueva</h1>
          <h2 className="pb-4">El maestro del trópico moderno</h2>
          <p>El arquitecto de mayor relevancia a nivel nacional e internacional de Venezuela, diseñador de una invaluable cantidad de obras de carácter público, laureado por la Síntesis de las Artes en la Ciudad Universitaria de Caracas, por UNESCO.</p>
          <div className="mt-20 underline	">
            <Link
              to="/carlos-raul-villanueva">
              Conoce más
            </Link>
          </div>
        </div>
      </div>
      </Parallax>
    </div>
  );
};

export default CarlosHomeView;
import React from "react";
import WhiteMenu from "../components/WhiteMenu";
import FooterHome from "../components/FooterHome";

const CarlosHomeView = () => {
  return (
    <div>
      <WhiteMenu />
      <div className="background-container-carlos">
        <div className="text-container">
          <h1>Carlos Raúl <br/> Villanueva</h1>
          <h2 className="pb-4">El maestro del trópico moderno</h2>
          <p>El arquitecto de mayor relevancia a nivel nacional e internacional de Venezuela, diseñador de una invaluable cantidad de obras de carácter público, laureado por la Síntesis de las Artes en la Ciudad Universitaria de Caracas, por UNESCO.</p>
          <div className="mt-20 underline	">
            <a href=""> Conoce más</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarlosHomeView;
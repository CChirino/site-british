import React from "react";
import WhiteMenu from "../components/WhiteMenu";
import FooterHome from "../components/FooterHome";

const EvaHomeView = () => {
  return (
    <div>
      <WhiteMenu />
      <div className="background-container-eva">
        <div className="text-container">
        <img
            className="w-1/5"
            src="/src/assets/image/eva-logo.png"
            alt="Eva Logo"
          />
          <h1>Experiencia Virtual <br/> Arquitectónica</h1>
          <p>Estamos comprometidos en explorar una nueva forma de interactuar con la arquitectura, el arte y el paisaje en la ciudad. Con este proyecto reconocemos el valor de la Síntesis de las Artes como principio arquitectónico de impacto urbano, a través de una HUB virtual de consulta interactiva.
         </p>
         <br />
         <p>
         La Ciudad Universitaria de Caracas se convierte en el primer escenario de EVA.
         </p>
          <div className="mt-20 underline	">
            <a href=""> Conoce más</a>
          </div>
        </div>
      </div>
      <FooterHome/>
    </div>
  );
};

export default EvaHomeView;
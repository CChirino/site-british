import React from "react";
import WhiteMenu from "../components/WhiteMenu";
import FooterHome from "../components/FooterHome";

const ArteHomeView = () => {
  return (
    <div>
      <WhiteMenu />
      <div className="background-container-arte">
        <div className="text-container">
          <h1>Arquitectura, Arte y <br/> Paisaje</h1>
          <h2 className="pb-4">Manifestaciones de la Síntesis de las Artes <br/> 
          en la Ciudad Universitaria de Caracas
        </h2>
          <p>Según UNESCO “la creación de un nuevo organismo arquitectónico-escultórico-pictórico, donde no se nota ninguna grieta entre las distintas expresiones”</p>
          <br/> 
          <p>La Síntesis se da de manera absolutamente orgánica: esta obra no podría existir en otra parte, y el edificio sería otro sin ella.</p>
          <span> Federica Palomero sobre el Aula Magna y las Nubes de Calder.</span>
          <div className="mt-20 underline	">
            <a href=""> Conoce más</a>
          </div>
        </div>
      </div>
      <FooterHome/>
    </div>
  );
};

export default ArteHomeView;
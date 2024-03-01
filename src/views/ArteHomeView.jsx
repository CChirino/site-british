import React from "react";
import WhiteMenu from "../components/WhiteMenu";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import image from "/static/images/EVA-04.png";

const ArteHomeView = () => {
  return (
    <div id="home-arte">
      <WhiteMenu />
      <Parallax bgImage={image} strength={500}>
      <div className="bg-opacity-75 h-90vh flex justify-center items-center">
        <div className="text-container">
          <h1>Arquitectura, Arte y <br/> Paisaje</h1>
          <h2 className="pb-4">Manifestaciones de la Síntesis de las Artes <br/> 
          en la Ciudad Universitaria de Caracas
        </h2>
          <p>Según UNESCO “la creación de un nuevo organismo arquitectónico-escultórico-pictórico, donde no se nota ninguna grieta entre las distintas expresiones”</p>
          <br/> 
          <p>La Síntesis se da de manera absolutamente orgánica: esta obra no podría existir en otra parte, y el edificio sería otro sin ella.</p>
          <span> Federica Palomero sobre el Aula Magna y las Nubes de Calder.</span>
          <div className="mt-20 underline	pb-16">
            <Link
              to="/sintesis-de-las-artes">
              Conoce más
            </Link>
          </div>
        </div>
      </div>
      </Parallax>
    </div>
  );
};

export default ArteHomeView;
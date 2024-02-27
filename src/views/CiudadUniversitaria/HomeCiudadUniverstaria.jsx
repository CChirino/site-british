import React from "react";
import WhiteMenu from "../../components/WhiteMenu";
import FooterHome from "../../components/FooterHome";

const HomeCiudadUniversitaria = () => {
  return (
    <div>
      <WhiteMenu />
      <div className="background-container-city pt-10">
        <div className="text-container">
          <h1>La Ciudad Universitaria <br/> de Caracas</h1>
          <p> La Ciudad Universitaria de Caracas es el actual campus de la más grande e importante universidad de Venezuela. Tiene una extensión de 161 hectáreas (incluido el Jardín Botánico de Caracas), y lo componen alrededor de cincuenta edificaciones, de distintas formas y tamaños. Entre las que se cuenta con dos estadios, el Hospital Universitario es el más grande de Latinoamérica que tiene 12 pisos, capacidad para 1.250 y una amplia cantidad de especialidades médicas. Es obra en casi su totalidad del arquitecto venezolano, Carlos Raúl Villanueva. La Ciudad Universitaria de Caracas, se construyó entre 1942 y 1972. 
          </p>
        </div>
      </div>
      <FooterHome/>
    </div>
  );
};

export default HomeCiudadUniversitaria;
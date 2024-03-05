import React, { useState } from "react";
import {animated } from "@react-spring/web";
import WhiteMenu from "../../components/WhiteMenu";
import { Parallax } from "react-parallax";
import image from "/static/images/EVA-03.png";

const HomeCarlosRaul = () => {

  return (
    <div>
      <WhiteMenu />
      <Parallax bgImage={image} strength={500}>
        <div className="bg-opacity-75 h-90vh flex justify-center items-center">
          <animated.div  className="text-container">
            <h1>Carlos Raúl<br/>Villanueva</h1>
            <p>Carlos Raúl Villanueva, Londres 1900-Caracas 1975, fue un reconocido arquitecto venezolano. Se formó en la École Beaux Arts de Paris y llegó a Venezuela a la edad de 27 años. Por las próximas cinco décadas dedicó su vida al servicio público y participó en la modernización de Venezuela, principalmente en Caracas y Maracay. Entre sus obras notables, está la Ciudad Universitaria de Caracas, los Museos de Bellas Artes y Ciencias Naturales en Caracas, el Hotel Jardín y la Plaza de Toros ambos en Maracay, una centena de bloques de viviendas obreras en distintas partes del país.</p>
          </animated.div>
        </div>
      </Parallax>
    </div>
  );
};

export default HomeCarlosRaul;
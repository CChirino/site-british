import React from "react";

const ActualidadSeccionCiudadUniversitaria = () => {
  return (
    <div>
      <div className="bg-zinc-500" id="actualidad">
        <div className="flex">
            <div className="w-2/5">
                <div className="container pl-10 pr-10">
                    <img src="/static/images/tierranadie.JPG" className="h-1/2 pb-5 pt-5" alt="" />
                </div>
            </div>
            <div className="w-3/5 text-whites pb-10 text-left mr-20 ml-32">
                 <div className="container">
                    <h2 className="pt-10 pb-10 subtitle-section">CUC en la actualidad</h2>
                    <p className="pt-1 pb-3 text-justify">
                    Cuarenta y tres escuelas junto a 25 institutos, pertenecientes a nueve facultades hacen vida dentro de la CUC. A esto se le suman organizaciones asociadas a la universidad como la Dirección de Cultura de la UCV quien maneja el Aula Magna y la sala de Conciertos como espacios de eventos, la Fundación Fondo Andrés Bello encargada de ambas zonas réntales, o la Fundación UCV que maneja el alquiler de los estadios deportivos; o el propio Jardín Botánico e Instituto Botánico.
                    </p>
                    <p className="pt-1 pb-3 text-justify">
                    Los estadios aún estando en la periferia del campus son un foco de atracción, miles de caraqueños tienen su primera aproximación a la Ciudad Universitaria de Caracas por medio de alguno de los tres estadios, predominantemente el de Beisbol (deporte nacional). Por otro lado, el Hospital Clínico Universitario es el hospital público más importante del país con sus 1.250 camas, todos los días cientos de personas ingresan al campus a fin de visitar el centro medico llegando a asistir un millón de personas al año según cifras oficiales del Ministerio de Salud, quien maneja la institución.
                    </p>
                    <p className="pt-1 pb-3 text-justify">
                    Por su parte las zonas réntales se encuentran sin desarrollar, la norte quedaron las fundaciones abandonadas del edificio propuesto por Villanueva en los 50, sobre la cual se han planteado cientos de ideas y proyectos, así como concursos sin nunca avanzar más allá del papel, la zona sur se plantearon distintos proyectos entre los que destacan la sede del CONICIT y la Facultad de Ciencias Políticas y Jurídicas de finales de los 90 de Jesús Tenrreiro.
                    </p>
                 </div>
            </div>
        </div>
        <div className="flex pt-10 pb-10 justify-center items-center max-w-full h-3/6">
          <img src="/static/images/CUCyzonas rentales-02.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ActualidadSeccionCiudadUniversitaria;
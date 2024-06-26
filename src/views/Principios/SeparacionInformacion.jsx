import React from "react";

const SeparacionInformacion = () => {
  return (
    <div>
      <div className="bg-zinc-50">
        <div className="flex ">
            <div className="w-2/5">
                <div className="container pt-12 pl-24 pr-10">
                    <img src="/static/images/OswALDO Vigas2-Edf Rectorado.jpg"  className="dh-1/2 pb-5 pt-5" alt="" />
                </div>
            </div>
            <div className="w-3/5 text-neutral-500	pt-12 text-left pr-16 ml-16">
                 <div className="container pb-10">
                    <h2 className=" pb-10 subtitle-section">Separacion de Usos</h2>
                    <p className="pt-1 pb-3">
                    Dentro del diseño urbano del campus hay una decisión consiente de separarlo por sectores, donde comparten muchos espacios y áreas en común, así como un corazón desde donde salen todas las arterías (calles, caminerías y pasillos), cada sector puede funcionar de forma impediente sin dependencia de los demás
                    </p>
                    <p className="pt-1 pb-3">
                    Esta decisión de Villanueva obedecía en parte a la administración académica de la universidad, articulada en torno a facultades; pero también viene dada por las propias búsquedas del arquitecto queriendo darle a cada sector y edificio su propia identidad, única
                    </p>
                    <p className="pt-1 pb-3">
                    Esta división o sectorización de la Ciudad Universitaria, en términos urbano arquitectónicos, fue ratificada por el comité de la UNESCO en el año 2000. Se separa de la siguiente forma: </p>

                    <ol className="pt-1 pb-20">
                        <li>Centro directivo y cultural</li>
                        <li>Sector médico</li>
                        <li>Ciencias y humanidades</li>
                        <li>Residencias</li>
                        <li>Jardín Botánico</li>
                        <li>Arquitectura</li>
                        <li>Área deportiva</li>
                        <li>Escuela técnica industrial</li>
                        <li>Servicios de ingeniería</li>
                        <li>Circulación</li>
                    </ol>

                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SeparacionInformacion;
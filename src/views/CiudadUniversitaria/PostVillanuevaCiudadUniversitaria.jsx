import React from "react";

const PostVillanuevaCiudadUniversitaria = () => {
  return (
    <div>
      <div className="bg-zinc-500">
        <div className="flex">
            <div className="w-2/5">
                <div className="container pt-6 pl-32 pr-10">
                    <img src="/static/images/gettyimages-OTTO B.jpg" className="h-1/2 pb-5 pt-5" alt="" />
                </div>
            </div>
            <div className="w-3/5 text-white pt-6 text-left pr-32 ml-24">
                 <div className="container">
                    <h2 className="pt-5 pb-10 subtitle-section">La CUC post Villanueva</h2>
                    <p className="pt-1 pb-3">
                    Villanueva veía la Ciudad Universitaria de Caracas como un proyecto definido, por lo cual estaba cerrado a más intervenciones por lo cual ya para finales de los 60’s consideraba todo el plan por concluido, y se dedico a finalizar las edificaciones aún en proceso. Lamentablemente en 1968-1969 un grupo de movimientos sociales y contraculturales se radicalizaría dentro de las residencias del campus, ante la presión ciudadana y política el gobierno nacional ordeno el allanamiento violentando la autonomía universitaria para sacar a los radicales y guerrilleros, estos hechos causaron el cierre de la universidad que reabriría sus puertas dos años después en 1971 con nuevas autoridades y un plan de renovación. 
                    </p>
                    <p className="pt-1 pb-3 ">
                    Juan Pedro Posani y Gorka Dorronsoro fueron dos habidos arquitectos discípulos y asistentes de Villanueva desde la década de los 50’s y 60’s respectivamente, serían los encargados conjuntamente de crear un plan maestro para el futuro desarrollo del campus. Las residencias estudiantiles serías desalojadas y remodeladas para dar cabida a nuevas escuelas.                   
                    </p>
                    <p className="pt-1 pb-3">
                    El nuevo plan maestro partía de las necesidades de la institución que venia creciendo exponencialmente desde su apertura en el nuevo campus, muchas facultades y escuelas tenían necesidades cada vez mayores. Por ello se contemplaba la nuevas edificaciones como la Torre de la Facultad de Ciencias Económicas y Sociales, la escuela de Ingeniería Sanitaría, el decanato de Ingeniería, la reformulación de la escuela técnica industrial, ahora como Facultad de Ciencias), entre otros. También se abrió la oportunidad para que otros profesionales hicieran propuestas para el campus o las zonas réntales, abriendo comisiones o concursos.
                    </p>
                    <p className="pt-1 pb-3">
                    En el año 2000 luego de un año de trabajos y conversaciones, se nombra a la Ciudad Universitaria de Caracas como Patrimonio Mundial por parte de la UNESCO. A raíz de esto se crea el Consejo de Preservación y Desarrollo de la CUC para velar por el patrimonio. A pesar de estos esfuerzos la situación económica de Venezuela en la segunda década del siglo XX se hizo sentir en el campus, con muchas de sus edificaciones y espacios alcanzando un triste estado de mantenimiento, llegando al catastrófico colapso de una sección de uno de los corredores techados en 2022.
                    </p>
                 </div>
            </div>
        </div>
        <div className="flex justify-center items-center pt-10 pb-10" id="linea-tiempo-mapa">
          <img src="/static/images/linea-tiempo-cuc.png" alt="" />
        </div>
        <div className="flex justify-center items-center pt-10 pb-10">
          <img src="/static/images/AereoFotos.gif" className="h-2/5 w-2/5" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PostVillanuevaCiudadUniversitaria;
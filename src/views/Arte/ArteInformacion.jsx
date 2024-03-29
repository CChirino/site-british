import React from "react";

const ArteInformacion = () => {
  return (
    <div>
      <div className="bg-zinc-50" id="coleccion">
        <div className="flex ">
            <div className="w-2/5">
                <div className="container  pt-12 pl-24 pr-10">
                    <img src="/static/images/OswALDO Vigas2-Edf Rectorado.jpg"  className="dh-1/2 pb-5 pt-5" alt="" />
                </div>
            </div>
            <div className="w-3/5 text-neutral-500 pt-12 text-left pr-16 ml-16">
                 <div className="container pb-10">
                    <h2 className=" pb-7 subtitle-section">La colección “Síntesis de las Artes”</h2>
                    <p className="pt-1 pb-3">
                    Para Villanueva la incorporación de las artes estaba considerada desde el primer momento que diseñaba y conceptualizaba los distintos espacios de la Ciudad Universitaria. Un total de 107 obras, que abarcan murales pictóricos, abstractos, figurativos, esculturas, vitrales y móviles conformar la colección. 
                    </p>
                    <p className="pt-1 pb-11">
                    Para incorporar las piezas de arte Villanueva se contactaba con los artistas que consideraba mejores para cada encargo, que imaginaba incorporar a los distintos espacios, a los internacionales le enviaba cartas con bocetos, planos y fachadas de los edificios, mientras que a los nacionales los invitaba a inspeccionar las obras.                    
                    </p>
                 </div>
            </div>
        </div>
      </div>
      <div className="bg-zinc-50" id="pertinencia">
        <div className="flex ">
            <div className="w-2/5">
                <div className="container pt-6 pl-24 pr-10">
                    <img src="/static/images/vitral leger Biblioteca central.JPG"  className="dh-1/2 pb-5 pt-5" alt="" />
                </div>
            </div>
            <div className="w-3/5 text-neutral-500 pt-6 text-left pr-16 ml-16">
                 <div className="container pb-10">
                    <h2 className="pb-7 subtitle-section">La pertinencia del arte</h2>
                    <p className="pt-1 pb-1">
                    Cada una de estas obras tiene una razón de ser, su técnica y diseño están pensados conjuntamente entre Villanueva y el artista para dar un nuevo valor al espacio o el entorno; por ello tenemos murales a todo lo alto de fachadas de torres como en las facultades de arquitectura y farmacia, esculturas que son focos de atención en espacios públicos como el Pastor de nubes y el Amphion.
                    </p>
                    <p className="pt-1 pb-1">
                    En la arquitectura moderna, y más aún en el trópico, el trabajo de la luz es algo sumamente importante, por ello Villanueva quiso aprovechar la constante luz solar por medio de vitrales en momentos muy significativos de su obra, como es el Léger de la Biblioteca central.
                    </p>
                    <p className="pt-1 pb-20">
                    Las piezas artísticas trascienden su rol, llegando en casos a ser las que definen el espacio más que las propias paredes o techos, este es el caso del Aula Magna y las Nubes de Calder que cumplen un doble rol escultórico y acústico. 
                    </p>
                 </div>
            </div>
        </div>
      </div>
      <div className="bg-zinc-50" id="artistas">
        <div className="flex pt-12">
            <div className="w-2/5">
                <div className="container pt-6 pl-24 pr-10">
                    <img src="/static/images/ab010.jpg"  className="dh-1/2 pb-5 pt-5" alt="" />
                </div>
            </div>
            <div className="w-3/5 text-neutral-500 pt-6 text-left pr-16 ml-16">
                 <div className="container pb-10">
                    <h2 className=" pb-7 subtitle-section">Los artistas disidentes</h2>
                    <p className="pt-1 pb-1">
                    Las colaboraciones serían un punto de honor para Villanueva, un total de 24 colaboradores provenientes de 9 países distintos, incluido Venezuela. En su momento considero a Picasso para una de las obras, sin embargo, esta idea fue rechazada por el gobierno de Pérez Jiménez por tratarse de reconocido comunista un comunista. Por su parte el artista venezolano Jesús Soto se negó a colaborar con la CUC durante el gobierno del dictador Marco Pérez Jimenez.
                    </p>
                    <h2 className="subtitle-section">Artistas nacionales:</h2>
                    <p className="pt-1 pb-1">
                    Migue Arroyo, Armando Barrios, Omar Carreño, Carlos González, Mateo Manaure, Pascual Navarro, Alirio Oramas, Alejandro Otero, Héctor Polero, Braulio Salazar, Jesús Soto, Victor Valera, Oswaldo Vigas.
                    </p>
                    <h2 className="subtitle-section">Artistas internacionales:</h2>
                    <p className="pt-1 pb-20">
                    Jean Arp (Francia), Andre Bloc (Francia), Alexander Calder (EEUU), Wilfredo Lam (Cuba), Henri Laurens (Francia), Fernand Léger (Francia), Pedro León Castro (Costa Rica), Baltasar Lobo (España), Antoine Pevsner (Rusia), Sophie Taeuber-Arp (Suiza), Victor Vasarely (Hungría).
                    </p>
                 </div>
            </div>
        </div>
      </div>
      <div className="bg-zinc-50">
        <img src="/static/images/arte.png"  className="h-1/2 pb-5 pt-16" alt="" />
      </div>
    </div>
  );
};

export default ArteInformacion;
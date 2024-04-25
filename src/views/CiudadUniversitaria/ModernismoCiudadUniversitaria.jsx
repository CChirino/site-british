import React from "react";
import FooterHome from "../../components/FooterHome";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ModernismoCiudadUniversitaria = () => {
  return (
    <div id="modernismo">
      <div className="bg-zinc-500"  style={{ backgroundImage: `url('/static/images/Fondo-02.png')`, backgroundPosition: 'center top', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="flex">
            <div className="w-3/6">
                <div className="container pt-6 pl-24 pr-10">
                    <LazyLoadImage
                    src="/static/images/Ciudad.png"
                    alt=""
                    className="h-1/2 pb-5 pt-5"
                    />
                    <LazyLoadImage
                      src="/static/images/FUNDACION-VILLANUEVA.jpg"
                      alt=""
                      className="h-1/2 pb-5 pt-5"
                    />
                </div>
            </div>
            <div className="w-3/6 text-white pt-6 text-left pr-16 ml-16">
                 <div className="container">
                    <h3 className="pb-7 subtitle-section">De Beux Arts a Modernismo 
                    </h3>
                    <p className="pt-1 pb-3 text-section">
                    Villanueva tomo entonces en 1950 una decisión que cambiaria completamente el resultado de la futura CUC, desecho completamente la pretensión axial y paso a un diseño más orgánico y moderno de las futuras edificaciones. Las necesidades del ejecutivo, ahora una junta militar de gobierno, le obligaron a definir el extremo oriental con mayor claridad, Caracas sería sede en diciembre de 1951 de los III juegos bolivarianos por lo cual el estadio olímpico debía estar listo. Alrededor de él surgirían otras instalaciones deportivas que no estaban contempladas en su plan original como complejo de piscinas, gimnasio techado, canchas menores la aire libre, etc.
                    </p>
                    <p className="pt-1 pb-3 text-section">
                    Ahora el campus tendría un nuevo centro construido un complejo cívico, cultural y administrativo para la universidad y la ciudad, lo que hoy conocemos como el conjunto central donde cohabitan el rectorado, la biblioteca central, junto al paraninfo, la sala de conciertos y el aula magna, todos interconectados por la plaza cubierta. La idea de espacios públicos cubiertos no quedaría solo ahí, se transformaría en más de dos kilómetros de caminerías cubiertas que interconectan la gran mayoría de edificios del campus. A su vez que definió otros lugares al aire libre para el ocio como el jardín de medicina, la sala hipóstila de chaguaramos o la tierra de nadie. El complejo central sería inaugurado en 1954 a propósito de la X Conferencia Iberoamericana la cual se celebro en el Aula Magna.
                    </p>
                    <p className="pt-1 pb-3 text-section">
                    Siguiendo estos nuevos lineamientos urbanos el campus se transformo no solo con el nuevo centro y las instalaciones deportivas en el extremo oriental; también lo hicieron las demás edificaciones. Las facultades de Arquitectura, Odontología y Farmacia se alzaron como paralelepípedos acompañados de cuerpos bajos acorde a las necesidades de cada uno. La Facultad de Humanidades resulto en tres barras horizontales paralelas entre si con alineación norte sur, interconectadas por patios de vegetación y rampas; en contra parte la facultad de ingeniería se atomiza en varios bloques pequeños cada uno ajustado a las necesidades de las distintas escuelas, institutos y laboratorios asociados.
                    </p>
                    <p className="pt-1 pb-3 text-section">
                    Además de ello surgen los bloques de residencias universitarias para dar alojamiento a estudiantes provenientes de otras ciudades del país, a esto se le suman el comedor universitario acompañado de tiendas. Villanueva además planta un bosque de árboles tropicales que permitiría distancias y amortiguar el ruido entre la zona más educativa y este sector dedicado a los estudiantes.
                    </p>
                    <p className="pt-1 pb-20 text-section">
                    Como un apéndice de la CUC, el arquitecto también planteo dos “zonas réntales” por fuera de los limites tradicionales, la avenida Las Acacias al sur y el río Guaire por el noreste. En estos espacios proponía edificar torres de oficinas o residencias, a fin de generar recursos para la institución. Lamentablemente por distintos motivos nunca se logró cumplir este objetivo.
                    </p>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ModernismoCiudadUniversitaria;
import React from "react";
import FooterHome from "../../components/FooterHome";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const HaciendaCiudadUniversitaria = () => {
  return (
    <>
    <div  style={{ backgroundImage: `url('/static/images/Fondo-01.png')`, backgroundPosition: 'center bottom', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div id="hacienda">
        <div>
          <div className="flex">
            <div className="w-3/6">
              <div className="container pt-12 pl-24 pr-10">
                  <LazyLoadImage
                    src="/static/images/EVA1-18.png"
                    alt=""
                    className="h-1/2 pb-5 pt-5"
                  />
                  <LazyLoadImage
                    src="/static/images/EVA2-18.png"
                    alt=""
                    className="h-1/2 pb-5 pt-5"
                  />
              </div>
            </div>
            <div className="w-3/6 text-white	pt-12 text-left pr-16 ml-16">
              <div className="container">
                <h3 className="subtitle-section ">Una Hacienda que se convirtió en Ciudad </h3>
                <p className="pt-3 pb-3 text-section">
                  La Ciudad Universitaria de Caracas es un producto moderno del ingenio de Villanueva, nació en 1942 con el decreto del presidente Medina Angarita. Sin embargo, su historia no inicia ahí sino en la hacienda Ibarra.
                </p>
                <p className="pt-1 pb-3 text-section">
                  Desde la época colonial los terrenos hoy de la CUC eran destinados al cultivo de caña de azúcar y la destilación del ron, eran propiedad de la familia Ibarra. En la casona de la hacienda se alojó Alexander Humboldt durante su paso por Caracas, fue el sitio donde Simón Bolívar se hospedó junto a José María Vargas en la última visita a la ciudad del primero, y juntos en sus salones redactaron el decreto para la fundación de la Universidad Central de Venezuela, institución a la cual hoy pertenece el campus.
                </p>
                <p className="pt-1 pb-11 text-section">
                  En 1943 el presidente Medina Angarita, compraría los terrenos de la hacienda y los donaría a la Universidad para comenzar así el proceso de urbanización y construcción de la Ciudad Universitaria, con la decisión también de conservar la casona como parte de la institución por su valor histórico y arquitectónico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hospital">
        <div>
          <div className="flex">
            <div className="w-3/6	">
              <div className="container pt-6 pl-24 pr-10">
                <LazyLoadImage
                      src="/static/images/gettyimages-OTTO B.jpg"
                      alt=""
                      className="dh-1/2 pb-5 pt-5"
                    />              
              </div>
            </div>
            <div className="w-3/6	 pt-5 text-white pt-6 text-left pr-16 ml-16">
              <div className="container">
                <h3 className="subtitle-section">Un nuevo hospital para una Caracas Moderna</h3>
                <p className="pt-3 text-section">
                  Durante los años cuarenta la insuficiencia del Hospital Vargas promueve la realización de un proyecto a través del Ministerio de Sanidad, y se vincula a la necesidad de práctica de los estudios de medicina. Esta fue la necesidad de partida y la excusa que necesitó el ejecutivo nacional, al momento el palacio donde se ubicaba la Universidad Central de Venezuela no era suficiente ni moderno.
                </p>
                <p className="pt-1 pb-20 text-section">
                  La primera propuesta urbana general partía con el hospital en el extremo occidental del campus, mientras que un gran eje sentido este-oeste organizaba las edificaciones transversales o paralelas al mismo, todo inmerso en una simetría impoluta con un remate en un estadio olímpico en el extremo oriental. Un diseño completamente racionalista y basado en su aprendizaje enBellas Artes. De este primer momento pre-moderno surgirían los primeros edificios como el propio hospital, los institutos de Medicina Experimental, el Anatómico y Anatomopatológico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HaciendaCiudadUniversitaria;
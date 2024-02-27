import React from "react";
import FooterHome from "../../components/FooterHome";

const HospitalCiudadUniversitaria = () => {
  return (
    <div>
      <div className="bg-neutral-50">
        <div className="flex">
            <div className="w-3/5 text-neutral-500	pt-48 text-left mr-6 ml-2">
                 <div className="container">
                    <h2 className="pt-10 pb-10 subtitle-section">Un nuevo hospital para una <br/> Caracas Moderna
                    </h2>
                    <p className="pt-1 pb-1">
                    Durante los años cuarenta la insuficiencia del Hospital Vargas promueve la realización de un proyecto a través del Ministerio de Sanidad, y se vincula a la necesidad de práctica de los estudios de medicina. Esta fue la necesidad de partida y la excusa que necesito el ejecutivo nacional, al momento el palacio donde se ubicaba la Universidad Central de Venezuela no era suficiente ni moderno.
                    </p>
                    <p className="pt-1 pb-1">
                    La primera propuesta urbana general partía con el hospital en el extremo occidental del campus, mientras que un gran eje sentido este-oeste organizaba las edificaciones transversales o paralelas al mismo, todo inmerso en una simetría impoluta con un remate en un estadio olímpico en el extremo oriental. Un diseño completamente racionalista y basado en su aprendizaje en Bellas Artes. De este primer momento pre-moderno surgirían los primeros edificios como el propio hospital, los institutos de Medicina Experimental, el Anatómico y Anatomopatológico.
                    </p>
                 </div>
            </div>
            <div className="w-2/5">
                <div className="container pr-5">
                    <img src="/src/assets/image/gettyimages-OTTO B.jpg" className="h-1/2 pb-5 pt-5" alt="" />
                </div>
            </div>
        </div>
      </div>
      <FooterHome/>
    </div>
  );
};

export default HospitalCiudadUniversitaria;
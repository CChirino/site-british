import React from "react";
import FooterHome from "../../components/FooterHome";

const HospitalCiudadUniversitaria = () => {
  return (
    <div id="hospital">
      <div className="bg-zinc-500">
        <div className="flex">
            <div className="w-2/5">
                <div className="container pt-6 pl-24 pr-10">
                    <img src="/static/images/gettyimages-OTTO B.jpg" className="dh-1/2 pb-5 pt-5" alt="" />
                </div>
            </div>
            <div className="w-3/5 pt-5 text-white pt-6 text-left pr-16 ml-16">
                 <div className="container">
                    <h3 className="subtitle-section">Un nuevo hospital para</h3>
                    <h3 className="pb-7 subtitle-section">una Caracas Moderna</h3>
                    <p>
                    Durante los años cuarenta la insuficiencia del Hospital Vargas promueve la realización de un proyecto a través del Ministerio de Sanidad, y se vincula a la necesidad de práctica de los estudios de medicina. Esta fue la necesidad de partida y la excusa que necesito el ejecutivo nacional, al momento el palacio donde se ubicaba la Universidad Central de Venezuela no era suficiente ni moderno.
                    </p>
                    <p className="pt-1 pb-20">
                    La primera propuesta urbana general partía con el hospital en el extremo occidental del campus, mientras que un gran eje sentido este-oeste organizaba las edificaciones transversales o paralelas al mismo, todo inmerso en una simetría impoluta con un remate en un estadio olímpico en el extremo oriental. Un diseño completamente racionalista y basado en su aprendizaje en Bellas Artes. De este primer momento pre-moderno surgirían los primeros edificios como el propio hospital, los institutos de Medicina Experimental, el Anatómico y Anatomopatológico.
                    </p>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalCiudadUniversitaria;
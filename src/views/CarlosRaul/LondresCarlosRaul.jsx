import React from "react";

const LondresCarlosRaul = () => {
  return (
    <div>
      <div className="bg-zinc-50">
        <div className="flex">
            <div className="w-3/5 text-neutral-500 text-right mr-32 ml-20">
                 <div className="container">
                    <h2 className="pt-10 pb-10 subtitle-section">Londres a Caracas, <br/> con escala en París
                    </h2>
                    <p className="pt-1 pb-1 mr-10 ml-10 text-justify">
                    Carlos Raúl Villanueva nace 30 de mayo de 1900 en el consulado venezolano de Londres, hijo de Carlos Antonio Villanueva, diplomático venezolano, y Paulina Astoul. A los 7 años se traslada junto a su familia a París donde realiza sus estudios en educación primaria y media. En 1920 ingresaría a estudiar arquitectura en la E’cole Beaux Arts de Paris, de donde egresaría luego de 8 años, ante la insistencia de su padre. Durante la década de los veinte, se impregno de todas las corrientes y movimientos artísticos de las vanguardias europeas; también pudo presenciar de primera mano las innovaciones de Auguste Perret, también trabajo durante seis meses para la oficina de Guilbert y Betelle en París.
                    </p>
                 </div>
            </div>
            <div className="w-2/5 pt-12  pl-10 pr-10">
                <div className="container pr-5">
                    <img src="/static/images/Carlos_Raúl_Villanueva.jpg" className="w-7/12" alt="" />
                    <img src="/static/images/02-hist-1-568x433.jpg" className="w-7/12 pt-5" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LondresCarlosRaul;
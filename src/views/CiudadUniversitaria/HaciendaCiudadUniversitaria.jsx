import React from "react";
import FooterHome from "../../components/FooterHome";

const HaciendaCiudadUniversitaria = () => {
  return (
    <div>
      <div className="bg-neutral-50">
        <div className="flex">
            <div className="w-2/5">
                <div className="container pl-5">
                    <img src="/src/assets/image/EVA1-18.png" className="h-1/2 pb-5 pt-5" alt="" />
                    <img src="/src/assets/image/EVA2-18.png" className="h-1/2 pb-5 pt-5" alt="" />
                </div>
            </div>
            <div className="w-3/5 text-neutral-500	pt-48 text-right mr-2 ml-4">
                 <div className="container">
                    <h2 className="pt-10 pb-10 subtitle-section">Una Hacienda que se <br/> convirtió en Ciudad
                    </h2>
                    <p className="pt-1 pb-1">
                    La Ciudad Universitaria de Caracas es un producto moderno del ingenio de Villanueva, nació en 1942 con el decreto del presidente Medina Angarita. Sin embargo, su historia no inicia ahí sino en la hacienda Ibarra.
                    </p>
                    <p className="pt-1 pb-1">
                    Desde la época colonial los terrenos hoy de la CUC eran destinados al cultivo de caña de azúcar y la destilación del ron, eran propiedad de la familia Ibarra. En la casona de la hacienda se alojo Alexander Humboldt durante su paso por Caracas, fue el sitio donde Simón Bolívar se hospedo junto a José María Vargas en la ultima visita a la ciudad del primero, y juntos en sus salones redactaron el decreto para la fundación de la Universidad Central de Venezuela, institución a la cual hoy pertenece el campus.
                    </p>
                    <p className="pt-1 pb-1">
                    En 1943 el presidente Medina Angarita, compraría los terrenos de la hacienda y los donaría a la Universidad para comenzar así el proceso de urbanización y construcción de la Ciudad Universitaria, con la decisión también de conservar la casona como parte de la institución por su valor histórico y arquitectónico.
                    </p>
                 </div>
            </div>
        </div>
      </div>
      <FooterHome/>
    </div>
  );
};

export default HaciendaCiudadUniversitaria;
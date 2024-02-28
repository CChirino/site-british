import React from "react";
import FooterHome from "../../components/FooterHome";

const DesarrolloProyecto = () => {
  return (
    <div>
      <div className="bg-zinc-900">
        <div className="flex">
            <div className="w-3/5 text-white	pt-48 text-left mr-6 ml-2">
                 <div className="container">
                    <h2 className="pt-10 pb-10 subtitle-section">Desarrollo del Proyecto </h2>
                 </div>
            </div>
            <div className="w-2/5">
                <div className="container pr-5">
                    <img src="/static/images/mockup EVA-66.png" className="w-3/5" alt="" />
                </div>
            </div>
        </div>
      </div>
      <FooterHome/>
    </div>
  );
};

export default DesarrolloProyecto;
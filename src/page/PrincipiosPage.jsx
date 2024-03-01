import HomePrincipios from "../views/Principios/HomePrincipios";
import MaterialidadSeccion from "../views/Principios/MaterialidadSeccion";
import MaterialidadInformacion from "../views/Principios/MaterialidadInformacion";
import MovimientoSeccion from "../views/Principios/MovimientoSeccion";
import MovimientoInformacion from "../views/Principios/MovimientoInformacion";
import QuintaFachadaSeccion from "../views/Principios/QuintaFachadaSeccion";
import QuintaFachadaInformacion from "../views/Principios/QuintaFachadaInformacion";
import EspacioUniversalSeccion from "../views/Principios/EspacioUniversalSeccion";
import EspacioUniversalInformacion from "../views/Principios/EspacioUniversalInformacion";
import VerdeSeccion from "../views/Principios/VerdeSeccion";
import VerdeInformacion from "../views/Principios/VerdeInformacion";
import SeparacionSeccion from "../views/Principios/SeparacionSeccion";
import SeparacionInformacion from "../views/Principios/SeparacionInformacion";
import ScrollToTop from "../components/ScrollToTop";
import FooterHome from "../components/FooterHome";


const PrincipiosPage = () => {
    return (
        <div>
            <ScrollToTop/>
            <HomePrincipios/>
            <MaterialidadSeccion/>
            <MaterialidadInformacion/>
            <MovimientoSeccion/>
            <MovimientoInformacion/>
            <QuintaFachadaSeccion/>
            <QuintaFachadaInformacion/>
            <EspacioUniversalSeccion/>
            <EspacioUniversalInformacion/>
            <VerdeSeccion/>
            <VerdeInformacion/>
            <SeparacionSeccion/>
            <SeparacionInformacion/>
            <FooterHome/>
        </div>
    );
};

export default PrincipiosPage;
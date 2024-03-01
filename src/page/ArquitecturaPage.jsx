import HomeArquitectura from "../views/Arquitectura/HomeArquitectura";
import ArquitecturaInformacion from "../views/Arquitectura/ArquitecturaInformacion";
import ScrollToTop from "../components/ScrollToTop";
import FooterHome from "../components/FooterHome";

const ArquitecturaPage = () => {
    return (
        <div>
            <ScrollToTop/>
            <HomeArquitectura/>
            <ArquitecturaInformacion/>
            <FooterHome/>
        </div>
    );
};

export default ArquitecturaPage;
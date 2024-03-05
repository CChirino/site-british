import HomeArquitectura from "../views/Arquitectura/HomeArquitectura";
import ArquitecturaInformacion from "../views/Arquitectura/ArquitecturaInformacion";
import ScrollToTop from "../components/ScrollToTop";
import FooterHome from "../components/FooterHome";
import HeaderHome from '../components/HeaderHome';


const ArquitecturaPage = () => {
    return (
        <div>
            <ScrollToTop/>
            <HeaderHome />
            <HomeArquitectura/>
            <ArquitecturaInformacion/>
            <FooterHome/>
        </div>
    );
};

export default ArquitecturaPage;
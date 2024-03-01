import HomeArquitectura from "../views/Arquitectura/HomeArquitectura";
import ArquitecturaInformacion from "../views/Arquitectura/ArquitecturaInformacion";
import FooterHome from "../components/FooterHome";

const ArquitecturaPage = () => {
    return (
        <div>
            <HomeArquitectura/>
            <ArquitecturaInformacion/>
            <FooterHome/>
        </div>
    );
};

export default ArquitecturaPage;
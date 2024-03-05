import HomePaisaje from "../views/Paisaje/HomePaisaje";
import PaisajeInformacion from "../views/Paisaje/PaisajeInformacion";
import ScrollToTop from "../components/ScrollToTop";
import FooterHome from "../components/FooterHome";
import HeaderHome from '../components/HeaderHome';


const PaisajePage = () => {
    return (
        <div>
            <ScrollToTop/>
            <HeaderHome />
            <HomePaisaje/>
            <PaisajeInformacion/>
            <FooterHome/>
        </div>
    );
};

export default PaisajePage;
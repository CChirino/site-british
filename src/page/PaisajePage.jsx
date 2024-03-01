import HomePaisaje from "../views/Paisaje/HomePaisaje";
import PaisajeInformacion from "../views/Paisaje/PaisajeInformacion";
import ScrollToTop from "../components/ScrollToTop";
import FooterHome from "../components/FooterHome";


const PaisajePage = () => {
    return (
        <div>
            <ScrollToTop/>
            <HomePaisaje/>
            <PaisajeInformacion/>
            <FooterHome/>
        </div>
    );
};

export default PaisajePage;
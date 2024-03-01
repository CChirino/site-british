import HomeArte from "../views/Arte/HomeArte";
import ArteInformacion from "../views/Arte/ArteInformacion";
import ScrollToTop from "../components/ScrollToTop";
import FooterHome from "../components/FooterHome";


const ArtePage = () => {
    return (
        <div>
            <ScrollToTop/>
            <HomeArte/>
            <ArteInformacion/>
            <FooterHome/>
        </div>
    );
};

export default ArtePage;
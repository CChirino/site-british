import HomeArte from "../views/Arte/HomeArte";
import ArteInformacion from "../views/Arte/ArteInformacion";
import ScrollToTop from "../components/ScrollToTop";
import FooterHome from "../components/FooterHome";
import HeaderHome from '../components/HeaderHome';


const ArtePage = () => {
    return (
        <div>
            <ScrollToTop/>
            <HeaderHome />
            <HomeArte/>
            <ArteInformacion/>
            <FooterHome/>
        </div>
    );
};

export default ArtePage;
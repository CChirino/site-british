import HomeArte from "../views/Arte/HomeArte";
import ArteInformacion from "../views/Arte/ArteInformacion";
import FooterHome from "../components/FooterHome";


const ArtePage = () => {
    return (
        <div>
            <HomeArte/>
            <ArteInformacion/>
            <FooterHome/>
        </div>
    );
};

export default ArtePage;
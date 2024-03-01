import HomePaisaje from "../views/Paisaje/HomePaisaje";
import PaisajeInformacion from "../views/Paisaje/PaisajeInformacion";
import FooterHome from "../components/FooterHome";


const PaisajePage = () => {
    return (
        <div>
            <HomePaisaje/>
            <PaisajeInformacion/>
            <FooterHome/>
        </div>
    );
};

export default PaisajePage;
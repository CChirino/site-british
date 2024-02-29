import HomeSintesisArtes from "../views/SintesisArtes/HomeSintesisArtes";
import ArquitecturaSintesisArtes from "../views/SintesisArtes/ArquitecturaSintesisArtes";
import ArteSintesisArtes from "../views/SintesisArtes/ArteSintesisArtes";
import PaisajismoSintesisArtes from "../views/SintesisArtes/PaisajismoSintesisArtes";
import PrincipiosSintesisArtes from "../views/SintesisArtes/PrincipiosSintesisArtes";
import ArquitecturaSeccionSintesisArtes from "../views/SintesisArtes/ArquitecturaSeccionSintesisArtes";
import FooterHome from "../components/FooterHome";

const SintesisArtesPage = () => {
    return (
        <div>
            <HomeSintesisArtes/>
            <ArquitecturaSintesisArtes/>
            <ArteSintesisArtes/>
            <PaisajismoSintesisArtes/>
            <PrincipiosSintesisArtes/>
            <ArquitecturaSeccionSintesisArtes/>
            <FooterHome/>
        </div>
    );
};

export default SintesisArtesPage;
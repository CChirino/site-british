import HomeSintesisArtes from "../views/SintesisArtes/HomeSintesisArtes";
import ArquitecturaSintesisArtes from "../views/SintesisArtes/ArquitecturaSintesisArtes";
import ArteSintesisArtes from "../views/SintesisArtes/ArteSintesisArtes";
import PaisajismoSintesisArtes from "../views/SintesisArtes/PaisajismoSintesisArtes";
import PrincipiosSintesisArtes from "../views/SintesisArtes/PrincipiosSintesisArtes";
import FooterHome from "../components/FooterHome";

const SintesisArtesPage = () => {
    return (
        <div>
            <HomeSintesisArtes/>
            <ArquitecturaSintesisArtes/>
            <ArteSintesisArtes/>
            <PaisajismoSintesisArtes/>
            <PrincipiosSintesisArtes/>
            <FooterHome/>
            <div className="invisible ">
                <img src="/static/images/mockup EVA-67.png" alt="" />
            </div>
        </div>
    );
};

export default SintesisArtesPage;
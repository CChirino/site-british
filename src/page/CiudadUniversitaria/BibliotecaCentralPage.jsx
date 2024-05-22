
import ScrollToTop from "../../components/ScrollToTop";
import HeaderHome from "../../components/HeaderHome";
import FichaBibliotecaCentral from "../../views/Maps/FichaBibliotecaCentral";
import FooterHome from "../../components/FooterHome";

const BibliotecaCentralPage = () => {
    return (
        <div>
            <ScrollToTop/>
            <HeaderHome />
            <FichaBibliotecaCentral/>
            <FooterHome/>
        </div>
    );
};

export default BibliotecaCentralPage;
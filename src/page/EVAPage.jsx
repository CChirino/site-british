import HomeEVA from "../views/EVA/HomeEVA";
import DesarrolloProyecto from "../views/EVA/DesarrolloProyecto";
import HeaderHome from '../components/HeaderHome';
import ScrollToTop from "../components/ScrollToTop";

const EVAPage = () => {
    return (
        <div>
            <ScrollToTop/>
            <HeaderHome />
            <HomeEVA/>
            <DesarrolloProyecto/>
        </div>
    );
};

export default EVAPage;
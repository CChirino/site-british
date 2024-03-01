import HomeEVA from "../views/EVA/HomeEVA";
import DesarrolloProyecto from "../views/EVA/DesarrolloProyecto";
import ScrollToTop from "../components/ScrollToTop";

const EVAPage = () => {
    return (
        <div>
            <ScrollToTop/>
            <HomeEVA/>
            <DesarrolloProyecto/>
        </div>
    );
};

export default EVAPage;
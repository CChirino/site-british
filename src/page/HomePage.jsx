import FirstView from '../views/FirstView';
import HomeView from '../views/HomeView';
import CiudadUniversitariaHomeView from '../views/CiudadUniversitariaHomeView';
import CarlosHomeView from '../views/CarlosHomeView';
import ArteHomeView from '../views/ArteHomeView';
import EvaHomeView from '../views/EvaHomeView';
import ScrollToTop from "../components/ScrollToTop";
import HeaderHome from '../components/HeaderHome';


const HomePage = () => {
    return (
        <div>
            <ScrollToTop/>
            <HeaderHome />
            <FirstView />
            <HomeView />
            <CiudadUniversitariaHomeView/>
            <CarlosHomeView/>
            <ArteHomeView/>
            <EvaHomeView/>
        </div>
    );
};

export default HomePage;
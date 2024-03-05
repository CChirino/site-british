import FirstView from '../views/FirstView';
import HomeView from '../views/HomeView';
import CiudadUniversitariaHomeView from '../views/CiudadUniversitariaHomeView';
import CarlosHomeView from '../views/CarlosHomeView';
import ArteHomeView from '../views/ArteHomeView';
import EvaHomeView from '../views/EvaHomeView';
import ScrollToTop from "../components/ScrollToTop";


const HomePage = () => {
    return (
        <div>
            <ScrollToTop/>
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
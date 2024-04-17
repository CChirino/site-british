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
        <>
            <HeaderHome />
            <ScrollToTop/>
            <FirstView />
            <HomeView />
            <CiudadUniversitariaHomeView/>
            <CarlosHomeView/>
            <ArteHomeView/>
            <EvaHomeView/>
        </>
    );
};

export default HomePage;
import FirstView from '../views/FirstView';
import HomeView from '../views/HomeView';
import CiudadUniversitariaHomeView from '../views/CiudadUniversitariaHomeView';
import CarlosHomeView from '../views/CarlosHomeView';
import ArteHomeView from '../views/ArteHomeView';
import EvaHomeView from '../views/EvaHomeView';

const HomePage = () => {
    return (
        <div>
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
import HomeCarlosRaul from '../views/CarlosRaul/HomeCarlosRaul';
import LondresCarlosRaul from '../views/CarlosRaul/LondresCarlosRaul';
import HacedorCarlosRaul from '../views/CarlosRaul/HacedorCarlosRaul';
import VillanuevaCarlosRaul from '../views/CarlosRaul/VillanuevaCarlosRaul';
import UltimosCarlosRaul from '../views/CarlosRaul/UltimosCarlosRaul';
import VideoCarlosRaul from '../views/CarlosRaul/VideoCarlosRaul';
import LineadetiempoCarlosRaul from '../views/CarlosRaul/LineadetiempoCarlosRaul';
import ScrollToTop from '../components/ScrollToTop';
import FooterHome from '../components/FooterHome';

const CarlosRaulPage = () => {
    return (
        <div>
            <ScrollToTop/>
            <HomeCarlosRaul/>
            <LondresCarlosRaul/>
            <HacedorCarlosRaul/>
            <VillanuevaCarlosRaul/>
            <UltimosCarlosRaul/>
            <VideoCarlosRaul/>
            <LineadetiempoCarlosRaul/>
            <FooterHome/>
        </div>
    );
};

export default CarlosRaulPage;
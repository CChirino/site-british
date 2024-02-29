import HomeCarlosRaul from '../views/CarlosRaul/HomeCarlosRaul';
import LondresCarlosRaul from '../views/CarlosRaul/LondresCarlosRaul';
import HacedorCarlosRaul from '../views/CarlosRaul/HacedorCarlosRaul';
import VillanuevaCarlosRaul from '../views/CarlosRaul/VillanuevaCarlosRaul';
import UltimosCarlosRaul from '../views/CarlosRaul/UltimosCarlosRaul';
import FooterHome from '../components/FooterHome';

const CarlosRaulPage = () => {
    return (
        <div>
            <HomeCarlosRaul/>
            <LondresCarlosRaul/>
            <HacedorCarlosRaul/>
            <VillanuevaCarlosRaul/>
            <UltimosCarlosRaul/>
            <FooterHome/>
        </div>
    );
};

export default CarlosRaulPage;
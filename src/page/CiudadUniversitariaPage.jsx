import HomeCiudadUniversitaria from '../views/CiudadUniversitaria/HomeCiudadUniverstaria';
import HaciendaCiudadUniversitaria from '../views/CiudadUniversitaria/HaciendaCiudadUniversitaria';
import HospitalCiudadUniversitaria from '../views/CiudadUniversitaria/HospitalCiudadUniversitaria';
import ModernismoCiudadUniversitaria from '../views/CiudadUniversitaria/ModernismoCiudadUniversitaria';
import PostVillanuevaCiudadUniversitaria from '../views/CiudadUniversitaria/PostVillanuevaCiudadUniversitaria';
import PatrimonioCiudadUniversitaria from '../views/CiudadUniversitaria/PatrimonioCiudadUniversitaria';
import FooterHome from '../components/FooterHome';
import PatrimonioSeccionCiudadUniversitaria from '../views/CiudadUniversitaria/PatrimonioSeccionCiudadUniversitaria';
import ActualidadCiudadUnivertaria from '../views/CiudadUniversitaria/ActualidadCiudadUnivertaria';
import ActualidadSeccionCiudadUniversitaria from '../views/CiudadUniversitaria/ActualidadSeccionCiudadUniversitaria';

const CiudadUniverstariaPage = () => {
    return (
        <div>
            <HomeCiudadUniversitaria/>
            <HaciendaCiudadUniversitaria />
            <HospitalCiudadUniversitaria/>
            <ModernismoCiudadUniversitaria/>
            <PostVillanuevaCiudadUniversitaria/>
            <PatrimonioCiudadUniversitaria/>
            <PatrimonioSeccionCiudadUniversitaria/>
            <ActualidadCiudadUnivertaria/>
            <ActualidadSeccionCiudadUniversitaria/>
            <FooterHome/>
        </div>
    );
};

export default CiudadUniverstariaPage;
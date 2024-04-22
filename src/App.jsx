import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import CiudadUniverstariaPage from './page/CiudadUniversitariaPage';
import CarlosRaulPage from './page/CarlosRaulPage';
import SintesisArtesPage from './page/SintesisArtesPage';
import EVAPage from './page/EVAPage';
import ArquitecturaPage from './page/ArquitecturaPage';
import ArtePage from './page/ArtePage';
import PaisajePage from './page/PaisajePage';
import PrincipiosPage from './page/PrincipiosPage';
import FacultadArquitecturaPage from './page/CiudadUniversitaria/FacultadArquitecturaPage';

function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/ciudad-universitaria" element={<CiudadUniverstariaPage />} />
        <Route path="/carlos-raul-villanueva" element={<CarlosRaulPage />} />
        <Route path="/sintesis-de-las-artes" element={<SintesisArtesPage />} />
        <Route path="/proyecto-eva" element={<EVAPage />} />
        <Route path="/arquitectura" element={<ArquitecturaPage />} />
        <Route path="/arte" element={<ArtePage />} />
        <Route path="/paisaje" element={<PaisajePage />} />
        <Route path="/principios" element={<PrincipiosPage />} />
        <Route path="/facultad-arquitectura" element={<FacultadArquitecturaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
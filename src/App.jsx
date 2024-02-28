import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import CiudadUniverstariaPage from './page/CiudadUniversitariaPage';
import CarlosRaulPage from './page/CarlosRaulPage';
import SintesisArtesPage from './page/SintesisArtesPage';
import EVAPage from './page/EVAPage';

function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/ciudad-universitaria" element={<CiudadUniverstariaPage />} />
        <Route path="/carlos-raul-villanueva" element={<CarlosRaulPage />} />
        <Route path="/sintesis-de-las-artes" element={<SintesisArtesPage />} />
        <Route path="/proyecto-eva" element={<EVAPage />} />
      </Routes>
    </Router>
  );
}

export default App;
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import CiudadUniverstariaPage from './page/CiudadUniversitariaPage';


function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/ciudad-universitaria" element={<CiudadUniverstariaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
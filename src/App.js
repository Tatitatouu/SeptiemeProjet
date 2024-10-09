import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil/Accueil';
import About from './pages/About/About';
import Error404 from './pages/Erreur404/Erreur404';
import Locations from './components/Locations/Locations';
import LocationDetails from './pages/LocationDétail/LocationDétail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/location/:id" element={<LocationDetails />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
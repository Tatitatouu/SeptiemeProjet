import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil/Accueil';
import About from './pages/About/About';
import Error404 from './pages/Erreur404/Erreur404';

function App() {
  return (
    <div>
      <Accueil />
    </div>
  );
}

function AboutApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export {App, AboutApp} ;

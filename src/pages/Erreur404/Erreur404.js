import React from 'react';
import { Link } from 'react-router-dom';
import './Erreur404.css'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Error404() {
  return (
    <div className="error-container">
      <Header />
      <div className="error-content">
        <h1 className="error-404">404</h1>
        <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
      </div>
      <Footer/>
    </div>
  );
}

export default Error404;

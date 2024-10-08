import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../../assets/LOGO.svg"

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="logo" />
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">À Propos</Link>
      </nav>
    </header>
  );
}

export default Header;

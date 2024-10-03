import React from 'react';
import './Header.css';
import logo from "../assets/LOGO.png"

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="logo" />
      <nav className="nav">
        <a href="/">Accueil</a>
        <a href="/about">À Propos</a>
      </nav>
    </header>
  );
}

export default Header;
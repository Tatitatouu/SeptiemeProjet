import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from "../../assets/LOGO.svg"

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="logo" />
      <nav className="nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "active-link" : ""
          }
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive ? "active-link" : ""
          }
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

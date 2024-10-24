import React from 'react';
import './Footer.css';
import logoFooter from "../../assets/LOGO.svg"

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Kasa logo" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
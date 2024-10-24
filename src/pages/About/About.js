import React from 'react';
import AboutBanner from '../../components/Banner/AboutBanner/AboutBanner';
import Footer from '../../components/Footer/Footer';
import Accordion from '../../components/Accordion/Accordion';
import Header from '../../components/Header/Header';

function About() {
  return (
    <div>
      <Header></Header>
      <AboutBanner title="A Propos" />
      <div className="accordion-container">
        <Accordion title="Fiabilité" content="Les annonces postées sur Kaza garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
        <Accordion title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kaza. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Accordion title="Service" content="La qualité est au cœur de notre engagement chez Kaza. Nous veillons à ce que chaque intéraction, que ce soit nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." />
        <Accordion title="Sécurité" content="La sécurité est la priorité chez Kaza. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>

      <Footer />
    </div>
  );
};

export default About;
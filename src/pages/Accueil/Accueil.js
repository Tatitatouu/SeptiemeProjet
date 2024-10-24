import React from 'react';
import Header from '../../components/Header/Header';
import AccueilBanner from '../../components/Banner/AccueilBanner/AccueilBanner';
import Locations from '../../components/Locations/Locations';
import Footer from '../../components/Footer/Footer';

function Accueil() {
  return (
    <div>
      <Header />
      <AccueilBanner />
      <Locations />
      <Footer />
    </div>
  );
}

export default Accueil;
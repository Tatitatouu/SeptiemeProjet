import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import LocationsGrid from '../components/LocationsGrid';
import Footer from '../components/Footer';

function Accueil() {
  return (
    <div>
      <Header />
      <Banner />
      <LocationsGrid />
      <Footer />
    </div>
  );
}

export default Accueil;
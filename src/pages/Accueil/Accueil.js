import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Locations from '../../components/Locations/Locations';
import Footer from '../../components/Footer/Footer';

function Accueil() {
  return (
    <div>
      <Header />
      <Banner />
      <Locations />
      <Footer />
    </div>
  );
}

export default Accueil;
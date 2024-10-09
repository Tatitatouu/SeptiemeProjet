import React from 'react';
import { useParams } from 'react-router-dom';
import locations from '../../data/LocationsData.json';
import './LocationDétail.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Error404 from '../Erreur404/Erreur404';

const LocationDetails = () => {
  const { id } = useParams();
  const location = locations.find(loc => loc.id === id);

  if (!location) {
    return <Error404></Error404>;
  }

  return (
    <div>
      <Header></Header>
    <div className="location-details">
      <h1>{location.title}</h1>
      <p>{location.description}</p>
      <img src={location.cover} alt={location.title} />
      <p>Hôte: {location.host.name}</p>
      <p>Note: {location.rating}/5</p>
      <p>Équipements: {location.equipments.join(', ')}</p>
      <p>Tags: {location.tags.join(', ')}</p>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default LocationDetails;
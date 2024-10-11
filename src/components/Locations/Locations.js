import React from 'react';
import { Link } from 'react-router-dom';
import locations from '../../data/LocationsData.json';
import './Locations.css';

const Locations = () => {
  const displayedLocations = locations.slice(0, 6);

  return (
    <div className="locations-container">
      <div className="locations-grid">
        {displayedLocations.map((location) => (
          <Link to={`/location/${location.id}`} key={location.id} className="location-card">
            <img src={location.cover} alt={location.title} className="location-cover" />
            <div className="location-title-accueil">
              <h2 className="location-title">{location.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Locations;
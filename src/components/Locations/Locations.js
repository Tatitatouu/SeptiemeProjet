import React from 'react';
import { Link } from 'react-router-dom';
import locations from '../../data/LocationsData.json';
import './Locations.css';

const Locations = () => {
  return (
    <div className="locations">
      {locations.map((location) => (
        <Link to={`/location/${location.id}`} key={location.id} className="location-card">
          <img src={location.cover} alt={location.title} className="location-cover" />
          <h2 className="location-title">{location.title}</h2>
          <p className="location-subtitle">{location.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Locations;
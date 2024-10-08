import React from 'react';
import locations from '../../data/Locations.json'; 
import './Locations.css'; 

function Locations() {
  return (
    <div className="locations-grid">
      {locations.map((location) => (
        <div key={location.id} className="location-card">
          <h2>{location.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Locations;
import React from 'react';
import locations from '../data/Locations.json'; 
import './LocationsGrid.css'; 

function LocationsGrid() {
  return (
    <div className="locations-grid">
      {locations.map((location) => (
        <div key={location.id} className="location-card">
          <h2>{location.titre}</h2>
        </div>
      ))}
    </div>
  );
}

export default LocationsGrid;
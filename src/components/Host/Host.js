import React from 'react';
import './Host.css';

const Host = ({ host }) => (
  <div className="host">
    <p>{host.name}</p>
    <img src={host.picture} alt={`${host.name}`} className="host-picture" />
  </div>
);

export default Host;
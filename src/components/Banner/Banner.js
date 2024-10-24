import React from 'react';
import './Banner.css';

function Banner({ children, className, text }) {
  return (
    <div className={`banner ${className}`}>
      {text && <h1>{text}</h1>}
      {children}
    </div>
  );
}

export default Banner;


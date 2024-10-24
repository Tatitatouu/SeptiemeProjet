import React from 'react';
import './Rating.css';

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="rating">
      {Array(fullStars).fill().map((_, i) => <span key={i} className="star">★</span>)}
      {Array(emptyStars).fill().map((_, i) => <span key={i} className="star empty">☆</span>)}
    </div>
  );
};

export default Rating;
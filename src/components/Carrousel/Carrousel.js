import React, { useState } from 'react';
import './Carrousel.css';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

const Carousel = ({ pictures, cover }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex] || cover}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />
      <button className="carousel-arrow left" onClick={handlePrev}>
        <img className='arrow-left' src={arrowLeft} alt="Précédent" />
      </button>
      <button className="carousel-arrow right" onClick={handleNext}>
        <img className='arrow-right' src={arrowRight} alt="Suivant" />
      </button>
      <div className="carousel-pagination">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  );
};

export default Carousel;
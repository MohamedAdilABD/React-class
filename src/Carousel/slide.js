import React, { useState, useEffect } from 'react';
import './slide.css';

const Slide = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000);  

    return () => clearInterval(intervalId);  
  }, [currentIndex]);  

  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="carousel-button previous">Previous</button>
      <img src={images[currentIndex]} className="carousel-image" />
      <button onClick={goToNext} className="carousel-button next">Next</button> 
      <div className="carousel-dots">
         {images.map((data, index) => (
           <span
             key={index}
             className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
             onClick={() => goToSlide(index)}
           ></span>
           ))}
      </div>
    </div>
  );
};

export default Slide;
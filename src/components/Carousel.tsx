import React, { useState } from 'react';
import '../styles/Carousel.scss';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      {images.length > 1 && (
        <button className="carousel__button" onClick={handlePrevious}>
          &lt;
        </button>
      )}
      <div className="carousel__image-container">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="carousel__image" />
        <div className="carousel__image-number">{`${currentImageIndex + 1}/${images.length}`}</div>
      </div>
      {images.length > 1 && (
        <button className="carousel__button" onClick={handleNext}>
          &gt;
        </button>
      )}
    </div>
  );
};

export default Carousel;

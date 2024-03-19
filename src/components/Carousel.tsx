import React from 'react';
import '../styles/Carousel.scss';

interface CarouselProps {
  image: string;
  text?: string;
}

const Carousel: React.FC<CarouselProps> = ({ image, text }) => {
  return (
    <div className="carousel">
      <img src={image} alt="Carousel" className="carousel__image" />
      {text && (
        <div className="carousel__overlay">
          <div className="carousel__text">{text}</div>
        </div>
      )}
    </div>
  );
};

export default Carousel;

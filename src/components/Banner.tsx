import React from 'react';
import '../styles/Banner.scss';

interface BannerProps {
  image: string;
  text?: string;
}

const Banner: React.FC<BannerProps> = ({ image, text }) => {
  return (
    <div className="Banner">
      <img src={image} alt="Banner" className="Banner__image" />
      {text && (
        <div className="Banner__overlay">
          <div className="Banner__text">{text}</div>
        </div>
      )}
    </div>
  );
};

export default Banner;

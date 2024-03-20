import React from 'react';
import '../styles/Rating.scss';

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const stars = [];
  const filledStars = Math.floor(rating);
  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push(<span key={i} className='star filled'></span>);
    } else {
      stars.push(<span key={i} className='star'></span>);
    }
  }
  return <div className='rating'>{stars}</div>;
};

export default Rating;

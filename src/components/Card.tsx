import React from 'react';
import '../styles/Card.scss';

interface CardProps {
  id: string;
  title: string;
  cover: string;
}

const Card: React.FC<CardProps> = ({ id, title, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card__cover" />
      <div className="card__content">
        <p className="card__title">{title}</p>
      </div>
    </div>
  );
};

export default Card;

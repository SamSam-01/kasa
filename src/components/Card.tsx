import React from 'react';
import '../styles/Card.sass';
import { Link } from 'react-router-dom';

interface CardProps {
  id: string;
  title: string;
  cover: string;
}

const Card: React.FC<CardProps> = ({ id, title, cover }) => {
  return (
    <Link to={`/location/${id}`}>
        <div className="card">
            <img src={cover} alt={title} className="card__cover" />
            <div className="card__content">
                <p className="card__title">{title}</p>
            </div>
        </div>
    </Link>
  );
};

export default Card;

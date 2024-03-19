import React from 'react';
import Carousel from '../components/Carousel';

const Home: React.FC = () => {
  return (
    <div>
      <Carousel image="/assets/home_carousel.png" text='Chez vous, partout et ailleurs' />
      <h1>Page d'accueil</h1>
      <p>Bienvenue sur votre première page avec React Router et TypeScript !</p>
    </div>
  );
};

export default Home;

import React from 'react';
import Carousel from '../components/Carousel';

const Home: React.FC = () => {
  return (
    <div>
      <Carousel image="/assets/home_carousel.png" text='Chez vous, partout et ailleurs' />
    </div>
  );
};

export default Home;

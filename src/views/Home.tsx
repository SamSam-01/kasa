import React from 'react';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import '../styles/Home.scss';
import logementsData from './../ressources/logements.json';

const Home: React.FC = () => {
  return (
    <div className='home_page'>
      <Carousel image="/assets/home_carousel.png" text='Chez vous, partout et ailleurs' />
      <div className="gallery">
        {logementsData.map((logement: any) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

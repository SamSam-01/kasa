import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import '../styles/Home.scss';
import logementsData from '../ressources/logements.json';

const Home: React.FC = () => {
  return (
    <div className='home_page'>
      <Banner image={process.env.PUBLIC_URL + "/assets/home_banner.png"} text='Chez vous, partout et ailleurs' />
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

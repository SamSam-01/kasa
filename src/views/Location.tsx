import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logementsData from '../ressources/logements.json';
import Carousel from '../components/Carousel';
import "../styles/Location.sass"
import LogementInfo from '../components/LogementInfo';
import HostInfo from '../components/HostInfo';
import Collapse from '../components/Collapse';
import NotFound from './NotFound';

const Location: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <NotFound />;
  }
  document.title = "Kasa - " + logement.title;
  const images = logement.pictures;

  return (
    <div className='location'>
      <Carousel images={images} />
      <div className='infos'>
        <div className='left-section'>
          <LogementInfo
            title={logement.title} 
            location={logement.location}
            tags={logement.tags}
          />
        </div>
        <div className='right-section'>
          <HostInfo
          hostName={logement.host.name}
          hostPicture={logement.host.picture}
          rating={Number(logement.rating)}
          />
        </div>
      </div>
      <div className='collapse-container'>
        <Collapse title="Description" content={logement.description}/>
        <Collapse title="Équipement" content={logement.equipments}/>
      </div>
    </div>
  );
};

export default Location;

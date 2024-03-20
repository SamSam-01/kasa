import React from 'react';
import { useParams } from 'react-router-dom';
import logementsData from '../ressources/logements.json';
import Carousel from '../components/Carousel';
import "../styles/Location.scss"
import LogementInfo from '../components/LogementInfo';
import HostInfo from '../components/HostInfo';

const Location: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }
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
          rating={logement.rating}
          />
        </div>
      </div>

    </div>
  );
};

export default Location;

import React from 'react';
import '../styles/HostInfo.scss';

interface HostInfoProps {
  hostName: string;
  hostPicture: string;
  rating: string;
}

const HostInfo: React.FC<HostInfoProps> = ({hostName, hostPicture, rating}) => {
  return (
    <div className='host-info'>
        <img src={hostPicture} alt={`Profile of ${hostName}`} className='host-picture' />
        <div className='host-details'>
        <p className='host-name'>{hostName}</p>
        <div className='host-rating'>
            <p className='rating'>{rating}</p>
            {/* Affichez ici l'icône de notation ou un autre élément visuel pour représenter la note */}
        </div>
        </div>
    </div>
  );
};

export default HostInfo;

import React from 'react';
import Rating from './Rating';
import '../styles/HostInfo.sass';

interface HostInfoProps {
  hostName: string;
  hostPicture: string;
  rating: number;
}

const HostInfo: React.FC<HostInfoProps> = ({ hostName, hostPicture, rating }) => {
  const [firstName, lastName] = hostName.split(' ');
  return (
    <div className='host'>
      <div className='host__details'>
        <p className='host__name'>{firstName} <br/> {lastName}</p>
        <img src={hostPicture} alt={`Profile of ${hostName}`} className='host__picture' />
      </div>
      <div className='host__rating-container'>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default HostInfo;

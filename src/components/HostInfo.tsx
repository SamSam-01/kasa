import React from 'react';
import Rating from './Rating';
import '../styles/HostInfo.scss';

interface HostInfoProps {
  hostName: string;
  hostPicture: string;
  rating: number;
}

const HostInfo: React.FC<HostInfoProps> = ({hostName, hostPicture, rating}) => {
  const [firstName, lastName] = hostName.split(' ');
  return (
    <div className='host-info'>
      <p className='host-name'>{firstName} <br/> {lastName}</p>
      <img src={hostPicture} alt={`Profile of ${hostName}`} className='host-picture' />
      <Rating rating={rating} />
    </div>
  );
};

export default HostInfo;

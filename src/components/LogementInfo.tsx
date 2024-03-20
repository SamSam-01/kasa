import React from 'react';
import Tags from './Tags';
import '../styles/LogementInfo.scss';

interface LogementInfoProps {
  title: string;
  location: string;
  tags: string[];
}

const LogementInfo: React.FC<LogementInfoProps> = ({ title, location, tags }) => {
  return (
    <div className='logements-info'>
      <h1 className='title'>{title}</h1>
      <p className='location'>{location}</p>
      <Tags  tags={tags} />
    </div>
  );
};

export default LogementInfo;

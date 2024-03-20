import React from 'react';
import '../styles/Tags.scss';

interface LogementInfoProps {
  tags: string[];
}

const LogementInfo: React.FC<LogementInfoProps> = ({ tags }) => {
  return (
    <div className='tags'>
    {tags.map((tag, index) => (
        <span key={index} className='tag'>{tag}</span>
    ))}
    </div>
  );
};

export default LogementInfo;

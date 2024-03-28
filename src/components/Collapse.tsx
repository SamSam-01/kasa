import React, { useState } from 'react';
import '../styles/Collapse.sass';

interface CollapseProps {
  title: string;
  content: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}>
      <div className='collapse-header'>
        <span>{title}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>^</span>
      </div>
      {isOpen && <div className='collapse-content'>{content}</div>}
    </div>
  );
};

export default Collapse;

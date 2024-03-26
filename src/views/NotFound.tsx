import React from 'react';
import { redirect } from 'react-router-dom';
import '../styles/NotFound.sass';

const NotFound: React.FC = () => {

  const handleReturnHome = () => {
    return redirect('/');
  };

  return (
    <div className='not-found-container'>
      <h1 className='error-code'>404</h1>
      <p className='error-message'>Oups! La page que vous demandez n'existe pas.</p>
      <p className='return-home' onClick={handleReturnHome}>Retourner sur la page d’accueil</p>
    </div>
  );
};

export default NotFound;

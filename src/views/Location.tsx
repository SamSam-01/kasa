import React from 'react';
import { useParams } from 'react-router-dom';
import logementsData from '../ressources/logements.json';
import Carousel from '../components/Carousel';

const Location: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Récupérer l'ID du logement depuis les paramètres d'URL
  const logement = logementsData.find((logement) => logement.id === id); // Rechercher le logement correspondant dans les données

  if (!logement) {
    return <div>Logement non trouvé</div>; // Gérer le cas où le logement n'est pas trouvé
  }
  const images = logement.pictures; // Supposons que logementData est un tableau d'objets, et vous récupérez le premier logement ici

  return (
    <div>
      {/* Afficher le carousel uniquement s'il y a plus d'une image */}
      {images.length > 1 && <Carousel images={images} />}
      <h2>{logement.title}</h2>
      {/* Afficher les autres données du logement ici */}
    </div>
  );
};

export default Location;

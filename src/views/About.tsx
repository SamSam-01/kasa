import React from 'react';
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';

const About: React.FC = () => {
  document.title = "A propos de Kasa";
  const CollapseContent = [
    {
      title: 'Fiabilité',
      content: "Les annonces postées sur Kasa garantissent une flabilité totale. Les photos sont conformes aux logements, et toutes les informations sont réguliérement vérifiées par nos équipes."
    },
    {
      title: 'Respect',
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
    },
    {
      title: 'Service',
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
    },
    {
      title: 'Sécurité',
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, \
      chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, \
      cela permet nos équipes de verifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
  ]
  return (
    <div className='about_page'>
      <Banner image={process.env.PUBLIC_URL + "/assets/about_banner.png"}/>
      {CollapseContent.map(item => (<Collapse title={item.title} content={item.content} key={item.title} />))}
    </div>
  );
};

export default About;

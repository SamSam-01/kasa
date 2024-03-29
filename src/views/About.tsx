import React from 'react';
import '../styles/About.sass';
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';

const About: React.FC = () => {
  return (
    <div className='about_page'>
      <Banner image={process.env.PUBLIC_URL + "/assets/about_banner.png"}/>
      <Collapse title='Fiabilité' content={"hi"} />
      <Collapse title='Respect' content={"hi"} />
      <Collapse title='Service' content={"hi"} />
      <Collapse title='Sécurité' content={"hi"} />
    </div>
  );
};

export default About;

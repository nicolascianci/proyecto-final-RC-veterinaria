import React from 'react';
import ButtonSesion from '../Components/ButtonSesion/ButtonSesion';
import ButtonConsulta from '../Components/ButtonConsulta/ButtonConsulta';import Cards from '../Components/Cards/Cards';
import Carousel from '../Components/Carousel/Carousel';
import Contacto from '../Components/Contacto/Contacto';

const Home = () => {
  return (
    <div>
     <Carousel />
      <ButtonConsulta />
      <ButtonSesion />
      <Cards />
      <Contacto />
    </div>
  );
};

export default Home;
import React from 'react';
import ButtonConsulta from '../../Components/ButtonConsulta/ButtonConsulta';
import ButtonSesion from '../../Components/ButtonSesion/ButtonSesion';
import Cards from '../../Components/Cards/Cards';
import Carousel from '../../Components/Carousel/Carousel';
import Ubicacion from '../../Components/Ubicacion/Ubicacion';

const Home = () => {
  return (
    <div>
     <Carousel />
      <ButtonConsulta />
      <ButtonSesion />
      <Cards />
      <Ubicacion />
    </div>
  );
};

export default Home;
import React from 'react';
// // import ButtonSesion from '../Components/ButtonSesion/ButtonSesion';
// // import ButtonTurno from '../Components/ButtonTurno/ButtonTurno';
import Cards from '../Components/Cards/Cards';
import Carousel from '../Components/Carousel/Carousel';
import Contacto from '../Components/Contacto/Contacto';
import Pacientes from '../Components/Pacientes/Pacientes';

const Home = () => {
  return (
    <div>
     <Carousel />
      {/* <ButtonSesion />
      <ButtonTurno /> */}
      <Cards />
      <Pacientes />
      <Contacto />
    </div>
  );
};

export default Home;
import React from 'react';
// // import ButtonSesion from '../Components/ButtonSesion/ButtonSesion';
// // import ButtonTurno from '../Components/ButtonTurno/ButtonTurno';
import Cards from '../Components/Cards/Cards';
import Pacientes from '../Components/Pacientes/Pacientes';

const Home = () => {
  return (
    <div>
      {/* <ButtonSesion />
      <ButtonTurno /> */}
      <Cards />
      <Pacientes />
    </div>
  );
};

export default Home;
import React from 'react';
import Cards from './Components/Cards/Cards';
import Carousel from './Components/Carousel/Carousel';
import Pacientes from './Components/Pacientes/Pacientes';
// import {Routes, Route} from 'react-router-dom';
// import Home from './Pages/Home';
// import Error from './Pages/Error';
// import Nosotros from './Pages/Nosotros';
// import Servicios from './Pages/Servicios';

function App() {
  return (
    <>
      <div>
        {/* <ButtonSesion />
        <ButtonTurno /> */}
        <Carousel />
        <Cards />
        <Pacientes />
      </div>


       {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/servicios' element={<Servicios />} />
       </Routes> */}
    </>
  );
}

export default App;

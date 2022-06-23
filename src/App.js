import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Nosotros from './Pages/Nosotros';
import Servicios from './Pages/Servicios';

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/servicios' element={<Servicios />} />
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

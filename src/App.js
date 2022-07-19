import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import Nosotros from './Pages/Nosotros/Nosotros';
import Servicios from './Pages/Servicios/Servicios';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import Consulta from './Pages/Consulta/Consulta';
import UsuarioRegistrado from './Pages/UsuarioRegistrado/UsuarioRegistrado';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/login' element={<Login />} />
        <Route path='/consulta' element={<Consulta />} />
        <Route path='/usuarioregistrado' element={<UsuarioRegistrado />} />
       </Routes>
       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

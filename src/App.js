import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Nosotros from './Pages/Nosotros';
import Servicios from './Pages/Servicios';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
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
       </Routes>
       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
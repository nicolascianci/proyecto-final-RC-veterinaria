import React from 'react';
import './Cards.css';
import buttonimg from '../assests/images/button-page-nosotros.jpg';
import buttonimg2 from '../assests/images/button-page-servicios.jpg';
import buttonimg3 from '../assests/images/button-page-galeria.jpg';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className="d-flex p-0 card-a-pages">
  <Link to="/nosotros" className="card-page card bg-dark text-white col-4 border border-0 rounded-0">
  <img src={buttonimg} className="card-img button-img rounded-0" alt="..." />
  <div className="card-img-overlay d-flex align-items-center justify-content-center">
    <h3 className="card-title">Nosotros</h3>
  </div>
</Link>
<Link to="/servicios" className="card-page card bg-dark text-white col-4 border border-0 rounded-0">
  <img src={buttonimg2} className="card-img button-img rounded-0" alt="..." />
  <div className="card-img-overlay d-flex align-items-center justify-content-center">
    <h3 className="card-title">Servicios</h3>
  </div>
</Link>
<Link to="/galeria" className="card-page card bg-dark text-white col-4 border border-0 rounded-0">
  <img src={buttonimg3} className="card-img button-img rounded-0" alt="..." />
  <div className="card-img-overlay d-flex align-items-center justify-content-center">
    <h3 className="card-title">Galeria</h3>
  </div>
</Link>

    </div>
  );
};

export default Cards;
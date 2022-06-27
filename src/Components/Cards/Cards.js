import React from 'react';
import './Cards.css';
import buttonimg from '../assests/button-page-nosotros.jpg';
import buttonimg2 from '../assests/button-page-servicios.jpg';

const Cards = () => {
  return (
    <div className="d-flex p-0 card-a-pages">
  <a href="/nosotros" className="card-page card bg-dark text-white col-6 border border-0 rounded-0">
  <img src={buttonimg} className="card-img button-img" alt="..." />
  <div className="card-img-overlay d-flex align-items-center justify-content-center">
    <h3 className="card-title">Nosotros</h3>
  </div>
</a>
<a href="/servicios" className="card-page card bg-dark text-white col-6 border border-0 rounded-0">
  <img src={buttonimg2} className="card-img button-img" alt="..." />
  <div className="card-img-overlay d-flex align-items-center justify-content-center">
    <h3 className="card-title">Servicios</h3>
  </div>
</a>
    </div>
  );
};

export default Cards;
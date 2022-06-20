import React from 'react';
import './Cards.css';

const Cards = () => {
  return (
    <div className="d-flex justify-content-around p-3 card-a-pages">
      <a href="/#" className="card bg-dark text-white w-25 border border-0 rounded-0">
  <img src="https://images.pexels.com/photos/6235114/pexels-photo-6235114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img" alt="..." />
  <div className="card-img-overlay d-flex align-items-center justify-content-center">
    <h3 className="card-title">Nosotros</h3>
  </div>
</a>
<a href="/#" className="card bg-dark text-white w-25 border border-0 rounded-0">
  <img src="https://images.pexels.com/photos/6235240/pexels-photo-6235240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img" alt="..." />
  <div className="card-img-overlay d-flex align-items-center justify-content-center">
    <h3 className="card-title">Servicios</h3>
  </div>
</a>
<a href="/#" className="card bg-dark text-white w-25 border border-0 rounded-0">
  <img src="https://images.pexels.com/photos/6816858/pexels-photo-6816858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img" alt="..." />
  <div className="card-img-overlay d-flex align-items-center justify-content-center">
    <h3 className="card-title">Galería</h3>
  </div>
</a>
    </div>
  );
};

export default Cards;
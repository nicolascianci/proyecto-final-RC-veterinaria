import React from 'react';

const Cards = () => {
  return (
    <div className="d-inline-flex justify-content-around p-3">
      <a href="/#" className="card bg-dark text-white w-25 border border-0">
  <img src="https://images.pexels.com/photos/1633689/pexels-photo-1633689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</a>
<a href="/#" className="card bg-dark text-white w-25 border border-0">
  <img src="https://images.pexels.com/photos/1633689/pexels-photo-1633689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</a>
<a href="/#" className="card bg-dark text-white w-25 border border-0">
  <img src="https://images.pexels.com/photos/1633689/pexels-photo-1633689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</a>
    </div>
  );
};

export default Cards;
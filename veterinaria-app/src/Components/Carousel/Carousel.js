import React from "react";
import "./carousel.css"

const Carousel = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide carousel-dark bg-carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src="https://www.simbiotia.com/wp-content/uploads/diseno-de-clinicas-veterinarias.jpg" className="d-block w-50 mx-auto img-fluid" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="https://estudioniddo.com/wp-content/uploads/2018/02/galeria_24.jpg" className="d-block w-50 mx-auto img-fluid" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="https://nadienosinvito.com.ar/wp-content/uploads/2017/07/467.jpg" className="d-block w-50 mx-auto img-fluid" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="https://i.pinimg.com/originals/d2/4a/b5/d24ab56dc02c86ec804d23d9cf5ae37e.jpg" className="d-block w-50 mx-auto img-fluid" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
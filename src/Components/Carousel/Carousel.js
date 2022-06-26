import React from "react";
import "./carousel.css"
import image1 from "../assests/Vet1.jpg"
import image2 from "../assests/Vet2.jpg"
import image3 from "../assests/Vet3.jpg"
import image4 from "../assests/Vet4.jpg"
import image5 from "../assests/Vet5.jpg"
import image6 from "../assests/Vet6.jpg"

const Carousel = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide carousel-dark bg-carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src={image1} className="d-block w-50 mx-auto img-fluid" alt="..." />
          <div className="carousel-text centrar-texto d-flex align-items-end justify-content-center">
            <h5 className="text-carousel">"Seguimos creciendo desde 1985 al servicio de nuestros clientes."</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={image2} className="d-block w-50 mx-auto img-fluid" alt="..." />
          <div className="carousel-text centrar-texto d-flex align-items-end justify-content-center">
            <h5 className="text-carousel">"Lo único imposible es aquello que no intentas."</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={image3} className="d-block w-50 mx-auto img-fluid" alt="..." />
          <div className="carousel-text centrar-texto d-flex align-items-end justify-content-center">
            <h5 className="text-carousel">"Lo mejor de nosotros siempre a disposición ."</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={image4} className="d-block w-50 mx-auto img-fluid" alt="..." />
          <div className="carousel-text centrar-texto d-flex align-items-end justify-content-center">
            <h5 className="text-carousel">"Los mayor variedad de productos. La mejor calidad."</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={image5} className="d-block w-50 mx-auto img-fluid" alt="..." />
          <div className="carousel-text centrar-texto d-flex align-items-end justify-content-center">
            <h5 className="text-carousel">"Profesionalismo. Seriedad. Empatía. Liderazgo."</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={image6} className="d-block w-50 mx-auto img-fluid" alt="..." />
          <div className="carousel-text centrar-texto d-flex align-items-end justify-content-center">
            <h5 className="text-carousel">"La excelencia como bandera es nuestro estandarte."</h5>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previo</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Carousel;
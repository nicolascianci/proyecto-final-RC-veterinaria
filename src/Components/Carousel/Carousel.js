import React from "react";
import "./carousel.css"
// import image1 from "../assests/Vet1.jpg"
import image2 from "../assests/Vet2.jpg";
import image3 from "../assests/Vet3.jpg";
import image4 from "../assests/Vet4.jpg";
import image5 from "../assests/Vet5.jpg";
import logo from "../assests/logo.png";

const Carousel = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide carousel-dark bg-carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src={image2} className="d-block mx-auto img-fluid w-100" alt="..." />
          <div className="carousel-text centrar-texto d-flex align-items-center justify-content-center">
            <h2 className="text-carousel text-center mb-0">La Huellita Veterinaria</h2>
            <img src={logo} className="logo-carousel p-0" alt="" />
          </div>
        </div>
        {/* <div className="carousel-item" data-bs-interval="5000">
          <img src={image2} className="d-block mx-auto img-fluid" alt="..." />
          <div className="carousel-text centrar-texto d-flex align-items-end justify-content-center">
            <h2 className="text-carousel">"Lo único imposible es aquello que no intentas."</h2>
          </div>
        </div> */}
        <div className="carousel-item" data-bs-interval="5000">
          <img src={image3} className="d-block mx-auto img-fluid" alt="..." />
          <div className="carousel-text centrar-texto d-flex align-items-center justify-content-center">
            <h2 className="text-carousel mb-0 text-center">Lo mejor de nosotros siempre a disposición de tu mascota</h2>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={image4} className="d-block mx-auto img-fluid" alt="..." />
          <div className="carousel-text centrar-texto d-flex align-items-center justify-content-center">
            <h2 className="text-carousel mb-0 text-center">Atención variada e integral</h2>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={image5} className="d-block mx-auto img-fluid" alt="..." />
          <div className="carousel-text centrar-texto d-flex align-items-center justify-content-center">
            <h2 className="text-carousel mb-0 text-center">Profesionalismo</h2>
          </div>
        </div>
        {/* <div className="carousel-item" data-bs-interval="5000">
          <img src={image6} className="d-block mx-auto img-fluid" alt="..." />
          <div className="carousel-text centrar-texto d-flex align-items-end justify-content-center">
            <h2 className="text-carousel">"La excelencia como bandera es nuestro estandarte."</h2>
          </div>
        </div> */}
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
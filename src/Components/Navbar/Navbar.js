import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from '../assests/images/logo.png';
import ButtonConsulta from "../ButtonConsulta/ButtonConsulta";
import ButtonSesion from "../ButtonSesion/ButtonSesion";

const Navbar = () => {
  const token = localStorage.getItem('token')

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
  <div className="container-fluid px-0">
    <Link to="/">
    <img src={img} className="logo-navbar" alt="logo" />
    </Link>
    <Link className="navbar-brand text-light fs-4 pe-5" to="/">La Huellita</Link>
    <button className="navbar-toggler me-3 btn-outline-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex text-center">
          <Link className="nav-link text-light fs-5" aria-current="page" to="/nosotros">Nosotros</Link>
          <Link className="nav-link text-light fs-5" aria-current="page" to="/servicios">Servicios</Link>
      </ul>
      <div className="d-flex justify-content-center">
        <div className="botones-navbar">
      <ButtonConsulta />
      {
        !token && <ButtonSesion />
      }
      </div>
      </div>
    </div>
  </div>
</nav>
    );
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ButtonSession from '../ButtonSesion/ButtonSesion';
import ButtonTurno from '../ButtonTurno/ButtonTurno';
import img from '../assests/logo.png';

const Navbar = () => {
  return (
        <header class="navbar-style sticky-top d-lg-flex flex-lg-column">
            <nav class="navbar navbar-expand-lg d-flex justify-content-between">
                <div class="navbar-logo">
                <Link class="navbar-brand text-light" to="/"><img className="img-navbar img" src={img} alt="" />
                    LA HUELLITA</Link>
                </div>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                            <Link class="nav-link text-light" aria-current="page" to="/nosotros">Nosotros</Link>
                    </li>
                    <li class="nav-item">
                            <Link class="nav-link text-light" aria-current="page" to="/servicios">Servicios</Link>
                    </li>
                    </ul>
                <div class="navbar-button p-2">
                    <ButtonSession />
                    <ButtonTurno />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
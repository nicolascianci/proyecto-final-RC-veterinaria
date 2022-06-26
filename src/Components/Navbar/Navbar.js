import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
        <header class="sticky-top d-lg-flex flex-lg-column">
            <nav class="navbar d-flex navbar-expand-lg justify-content-center bg-light">
            <Link to="/">
                <div class="navbar-logo ms-">
                    <a class="navbar-brand" href="/">LA HUELLITA</a>
                </div>
                </Link>
                <div class="navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                    <Link to="/nosotros">
                    <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/nosotros">Nosotros</a>
                    </li>
                    </Link>
                    <Link to="/servicios">
                    <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/servicios">Servicios</a>
                    </li>
                    </Link>
                    </ul>
                </div>
                <div class="navbar-button p-2">
                    <Link to="/login"><button class="button iniciar-sesion mx-1 rounded">Iniciar sesion</button></Link>
                    <Link to="/turnos"><button class="button pedir-turno mx-1 rounded">Pedir turno</button></Link>
                    
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
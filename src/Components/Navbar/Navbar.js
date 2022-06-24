import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
        <header class="sticky-top d-lg-flex flex-lg-column">
            <nav class="navbar d-flex navbar-expand-lg justify-content-center bg-light">
                <div class="navbar-logo ms-">
                    <a class="navbar-brand" href="/">LA HUELLITA</a>
                </div>
                <div class="navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/nosotros">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/servicios">Servicios</a>
                        </li>
                    </ul>
                </div>
                <div class="navbar-button p-2">
                    <button class="button iniciar-sesion mx-1 rounded">Iniciar sesion</button>
                    <button class="button pedir-turno mx-1 rounded">Pedir turno</button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
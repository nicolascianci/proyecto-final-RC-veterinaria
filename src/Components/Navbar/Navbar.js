import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
        <header class="sticky-top d-lg-flex flex-lg-column">
            <nav class="navbar d-flex navbar-expand-lg justify-content-center bg-light">
                <div class="navbar-logo">
                    <a class="navbar-brand" href="#">LA HUELLITA</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">NOSOTROS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">SERVICIOS</a>
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
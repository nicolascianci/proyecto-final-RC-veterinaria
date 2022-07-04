import React from 'react';
import './ButtonSesion.css';
import img from '../assests/images/caminando-con-perro.png';
import { Link } from 'react-router-dom';

const ButtonSesion = () => {
    return (
      <Link to="/login">
        <button type="button" className="boton-sesion btn btn-primary btn-lg col-6 py-4">
                <img className="mx-3" src={img} alt="icono" /> Ingresar
        </button></Link>
      );
};

export default ButtonSesion;
import React from 'react';
import './ButtonSesion.css';
import img from '../assests/caminando-con-perro.png';

const ButtonSesion = () => {
    return (
      <a href="/login">
        <button type="button" className="boton-sesion btn btn-primary btn-lg col-6">
                <img className="mx-3" src={img} alt="" /> Ingresar
        </button></a>
      );
};

export default ButtonSesion;
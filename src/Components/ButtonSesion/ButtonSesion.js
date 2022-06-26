import React from 'react';
import './ButtonSesion.css';

import icon from '../assests/caminando-con-perro.png'

const ButtonSesion = () => {
    return (
        <button type="button" className="boton-sesion btn btn-primary btn-lg col-6">
                <img className="mx-3" src={icon} alt="" /> Inicio de Sesion
        </button>
      );
};

export default ButtonSesion;
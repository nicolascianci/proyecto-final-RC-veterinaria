import React from 'react';
import './ButtonTurno.css';

import icon from '../assests/mascota.png'

const ButtonTurno = () => {
    return (
        <button type="button" className="boton-turno btn btn-primary btn-lg col-6">
                <img className ="mx-3" src= {icon} alt="" />Pedir Turno
        </button>
      );
};

export default ButtonTurno;

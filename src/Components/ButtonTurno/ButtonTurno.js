import React from 'react';
import './ButtonTurno.css';
import img from '../assests/mascota.png'

const ButtonTurno = () => {
    return (
      <a href="/turnos">
        <button type="button" className="boton-turno btn btn-primary btn-lg col-6 py-4">
                <img className="mx-3" src={img} alt="" /> Pedir Turno
        </button>
        </a>
      );
};

export default ButtonTurno;

import React from 'react';
import './ButtonConsulta.css';
import img from '../assests/mascota.png'

const ButtonConsulta = () => {
    return (
      <a href="/consulta">
        <button type="button" className="boton-turno btn btn-primary btn-lg col-6 py-4">
                <img className="mx-3" src={img} alt="" /> Consultar
        </button>
        </a>
      );
};

export default ButtonConsulta;

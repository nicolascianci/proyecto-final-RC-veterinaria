import React from 'react';
import './ButtonConsulta.css';
import img from '../assests/images/mascota.png';

const ButtonConsulta = () => {
    return (
      <a href="/consulta">
        <button type="button" className="boton-consulta btn btn-primary btn-lg col-6 py-4">
                <img className="mx-3 " src={img} alt="icono" /> Consultar
        </button>
        </a>
      );
};

export default ButtonConsulta;

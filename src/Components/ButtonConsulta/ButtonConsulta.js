import React from 'react';
import './ButtonConsulta.css';
import img from '../assests/images/mascota.png';
import { Link } from 'react-router-dom';

const ButtonConsulta = () => {
    return (
      <Link to="/consulta">
        <button type="button" className="boton-consulta btn btn-primary btn-lg col-6 py-4">
                <img className="mx-3" src={img} alt="icono" /> Consultar
        </button>
        </Link>
      );
};

export default ButtonConsulta;

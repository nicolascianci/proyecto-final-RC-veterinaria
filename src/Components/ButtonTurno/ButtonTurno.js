import React from 'react';
import './ButtonTurno.css';

const ButtonTurno = () => {
    return (
        <button type="button" className="boton-turno btn btn-primary btn-lg col-6">
                <img className ="mx-3" src="./mascota.png" alt="">Pedir Turno</img>
        </button>
      );
};

export default ButtonTurno;

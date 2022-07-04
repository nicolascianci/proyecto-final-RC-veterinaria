import React from 'react';
import '../Error/Error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="errorpage d-flex align-items-center justify-content-center">
      <div className="text-error">
      <h1 className="text-light text-center w-100 p-5"><strong>¡UPS!</strong><br />PARECE QUE LA PÁGINA QUE BUSCAS NO EXISTE</h1>
      </div>
        <Link to="/">
      <button className="btn-error btn rounded-0 fs-5">Volver a Página Principal</button>
      </Link>
    </div>
  );
};

export default Error;
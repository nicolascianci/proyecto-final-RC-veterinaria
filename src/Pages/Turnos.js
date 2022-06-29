import React from 'react';
import './Turnos.css'

const Turnos = () => {
  return (
    <div className="consulta d-flex align-items-center justify-content-center">
      <div className="select-consulta m-5 w-25">
      <label className="d-block">Consulta</label>
      <select className="w-100 rounded-0" name="select">
  <option value="value1" selected>Value 1</option>
  <option value="value2">Value 2</option>
  <option value="value3">Value 3</option>
  <option value="value1">Value 1</option>
  <option value="value2">Value 2</option>
  <option value="value3">Value 3</option>
</select>
  <label className="d-block w-25">Descripción</label>
  <textarea className="w-100 rounded-0" name="" id="" rows="6"></textarea>
<div className="d-block d-flex justify-content-center">
<button className="btn btn-warning m-1">Responder</button>
<button className="btn btn-warning m-1">Cancelar</button>
</div>
</div>
    </div>
  );
};

export default Turnos;
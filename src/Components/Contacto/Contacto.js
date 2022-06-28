import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="contacto-section d-flex justify-content-center align-items-center py-3">
      <iframe title="mapa" className="mapa m-3" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.408879082126!2d-65.2072018!3d-26.8367009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1656373921009!5m2!1ses-419!2sar" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <form className="formulario-email">
        <label className="label-contacto d-block text-light">Email de contacto</label>
        <input className="d-block w-100 mb-1" name="email-contacto" type="text" required />
        <label className="d-block text-light">Nombre / Asunto</label>
        <input className="d-block w-100 mb-1" name="nombre-asunto" type="text" required />
        <label className="d-block text-light">Mensaje</label>
        <textarea name="mensaje" type="submit" id="mensaje" cols="30" rows="5" className="cuadro-mensaje p-1" required />
        <button className="d-block btn btn-light border-0 rounded-0 px-2 mb-1">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
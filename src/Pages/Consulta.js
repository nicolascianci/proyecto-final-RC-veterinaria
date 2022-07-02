import React from 'react';
import './Consulta.css';

const Consulta = () => {
  return (
    <section className="contacto-section d-inline-flex justify-content-evenly align-items-center p-5">
      <div class="foto-texto-card card bg-dark text-white col-6 border-0 rounded-0">
  <img src="https://images.pexels.com/photos/7195118/pexels-photo-7195118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img rounded-0 " alt="..." />
  <div className="card-img-overlay d-flex align-items-center">
  <h5 className="m-5 text-center">Veterinaria Huellitas es un <strong>centro especializado en la atención integral</strong> de tu mascota. Ofrecemos a nuestros clientes una completa atención para los animales, ya sean perros, gatos o especies exóticas, un servicio higiénico-sanitario completo, asesoramiento nutricional, análisis de laboratorio, peluquería, guardería, entre otros.</h5>
</div>
</div>

      <div className="col-6 p-5">
      <form className="formulario-email">
        <label className="label-contacto d-block text-light">Email de contacto</label>
        <input className="d-block mb-1 w-100" name="email-contacto" type="text" required />
        <label className="d-block text-light">Nombre / Asunto</label>
        <input className="d-block mb-1 w-100" name="nombre-asunto" type="text" required />
        <label className="d-block text-light">Mensaje</label>
        <textarea name="mensaje" type="submit" id="mensaje" cols="50" rows="5" className="cuadro-mensaje p-1" required />
        <button className="d-block btn btn-light border-0 rounded-0 px-2 mb-1">Enviar</button>
      </form>
      </div>
    </section>
  );
};

export default Consulta;
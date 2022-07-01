import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="contacto-inicio d-flex justify-content-center align-items-center">
      <iframe title="mapa" className="mapa p-3" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.408879082126!2d-65.2072018!3d-26.8367009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1656373921009!5m2!1ses-419!2sar" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <ul className="p-3 text-light fs-5">
  <li>La Huellita Veterinaria</li>
  <li>General Paz 576, San Miguel de Tucumán</li>
  <li>+5493815783030</li>
  <li>@academy@rollingcodeschool.com</li>
</ul>
    </section>
  );
};

export default Contacto;
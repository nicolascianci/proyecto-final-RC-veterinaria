import React from 'react';
import { Link } from 'react-router-dom';
import './Nosotros.css';

const Nosotros = () => {
  return (
    <section class="section-nosotros m-3 d-flex">
  <div class="texto-nosotros row align-items-center text-center">
  <div class="d-block py-4 px-4">
  <h5 className="m-1">Veterinaria Huellitas es un <strong>centro especializado en la atención integral</strong> de tu mascota. Ofrecemos a nuestros clientes una completa atención para los animales, ya sean perros, gatos o especies exóticas, un servicio higiénico-sanitario completo, asesoramiento nutricional, análisis de laboratorio, peluquería, guardería, entre otros.</h5><br />

    <h3>Valores</h3>
    <h5><strong>Profesionalidad</strong></h5>
    <p>Buscamos siempre el mejor procedimiento, adaptándonos a las circunstancias individuales de cada caso.</p>
    <h5><strong>Cercanía</strong></h5>
    <p>Centramos nuestro esfuerzo en la satisfacción del cliente, comprendiendo que, para la mayoría, su mascota es uno más de la familia.</p>
    <h5><strong>Pasión</strong></h5>
    <p>Somos unos enamorados de nuestra profesión y eso nos hace desempeñarla con orgullo y entusiasmo.</p>
    <h5><strong>Actualidad</strong></h5>
    <p>Nos comprometemos a estar en permanente formación, para ofrecer a nuestros pacientes siempre la mejor atención.</p>
    <h5><strong>Responsabilidad</strong></h5>
    <p>Estamos concienciados de que nuestro trabajo repercute en la salud pública y en el bienestar de la sociedad.</p>

    <Link to="/servicios" className="btn btn-info m-4"><strong>Click aquí</strong> para conocer todos nuestros servicios</Link>
  </div>
  </div>

  <div class="fotografias d-block">
  <div class="card-group">
    <img src="https://images.pexels.com/photos/6234616/pexels-photo-6234616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="w-50" alt="..." />
    <img src="https://images.pexels.com/photos/6235664/pexels-photo-6235664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="w-50" alt="..." />
    <img src="https://images.pexels.com/photos/6235241/pexels-photo-6235241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="w-50" alt="..." />
    <img src="https://images.pexels.com/photos/7469227/pexels-photo-7469227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="w-50" alt="..." />
</div>
</div>

</section>
  );
};

export default Nosotros;
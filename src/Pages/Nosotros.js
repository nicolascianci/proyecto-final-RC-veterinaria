import React from 'react';
import { Link } from 'react-router-dom';
import './Nosotros.css';

const Nosotros = () => {
  return (
    <section class="section-nosotros m-0">
  <div class="texto-nosotros align-items-center text-center">
  <div class="py-4 px-4">
  <h5 className="m-1">Veterinaria Huellitas es un <strong>centro especializado en la atención integral</strong> de tu mascota. Ofrecemos a nuestros clientes una completa atención para los animales, ya sean perros, gatos o especies exóticas, un servicio higiénico-sanitario completo, asesoramiento nutricional, análisis de laboratorio, peluquería, guardería, entre otros.</h5>
</div>

<div className="d-flex">
  <img src="https://images.pexels.com/photos/7469214/pexels-photo-7469214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="col-3 h-100" alt="" />
  <img src="https://images.pexels.com/photos/1350591/pexels-photo-1350591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="col-3 h-100" alt="" />
  <img src="https://images.pexels.com/photos/6235242/pexels-photo-6235242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="col-3 h-100" alt="" />
  <img src="https://images.pexels.com/photos/6235113/pexels-photo-6235113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="col-3 h-100" alt="" />
</div>


<div className="mt-4 mb-2">
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

    <Link to="/servicios" className="boton-servicios btn p-3 m-4 border-0 rounded-0"><strong>Click aquí</strong> para conocer todos nuestros servicios</Link>
  </div>
  </div>
  <div className="d-flex">
  <img src="https://images.pexels.com/photos/6235005/pexels-photo-6235005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="col-3 h-100" alt="" />
  <img src="https://images.pexels.com/photos/6816858/pexels-photo-6816858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="col-3 h-100" alt="" />
  <img src="https://images.pexels.com/photos/6234622/pexels-photo-6234622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="col-3 h-100" alt="" />
  <img src="https://images.pexels.com/photos/6234980/pexels-photo-6234980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="col-3 h-100" alt="" />
  </div>
  </section>
  );
};

export default Nosotros;
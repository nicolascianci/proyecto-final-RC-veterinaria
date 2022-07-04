import React from 'react';
import { Link } from 'react-router-dom';
import './Nosotros.css';

const Nosotros = () => {
  return (
    <div class="m-0">
  <div class="text-center">
  <div class="p-4">
  <h4 className="texto-nosotros m-1">Veterinaria Huellitas es un <strong>centro especializado en la atención integral</strong> de tu mascota. Ofrecemos a nuestros clientes una completa atención para los animales, ya sean perros, gatos o especies exóticas, un servicio higiénico-sanitario completo, asesoramiento nutricional, análisis de laboratorio, peluquería, guardería, entre otros.</h4>
</div>

<div className="d-flex">
  <img src="https://images.pexels.com/photos/7469214/pexels-photo-7469214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="imagenes-nosotros col-3" alt="trabajo-veterinaria" />
  <img src="https://images.pexels.com/photos/1350591/pexels-photo-1350591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="imagenes-nosotros col-3" alt="trabajo-veterinaria" />
  <img src="https://images.pexels.com/photos/6235242/pexels-photo-6235242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="imagenes-nosotros-none col-3" alt="trabajo-veterinaria" />
  <img src="https://images.pexels.com/photos/6235113/pexels-photo-6235113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="imagenes-nosotros-none col-3" alt="trabajo-veterinaria" />
</div>


<div className="texto-valores mt-4 mb-2">
<h3>Valores</h3>
    <h4><strong>Profesionalidad</strong></h4>
    <h5>Buscamos siempre el mejor procedimiento, adaptándonos a las circunstancias individuales de cada caso.</h5>
    <h4><strong>Cercanía</strong></h4>
    <h5>Centramos nuestro esfuerzo en la satisfacción del cliente, comprendiendo que, para la mayoría, su mascota es uno más de la familia.</h5>
    <h4><strong>Pasión</strong></h4>
    <h5>Somos unos enamorados de nuestra profesión y eso nos hace desempeñarla con orgullo y entusiasmo.</h5>
    <h4><strong>Actualidad</strong></h4>
    <h5>Nos comprometemos a estar en permanente formación, para ofrecer a nuestros pacientes siempre la mejor atención.</h5>
    <h4><strong>Responsabilidad</strong></h4>
    <h5>Estamos concienciados de que nuestro trabajo repercute en la salud pública y en el bienestar de la sociedad.</h5>

    <Link to="/servicios" className="boton-servicios btn p-3 m-4 border-0 rounded-0 fs-5"><strong>Click aquí</strong> para conocer todos nuestros servicios</Link>
  </div>
  </div>
  <div className="d-flex">
  <img src="https://images.pexels.com/photos/6235005/pexels-photo-6235005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="imagenes-nosotros-none col-3" alt="trabajo-veterinaria" />
  <img src="https://images.pexels.com/photos/6816858/pexels-photo-6816858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="imagenes-nosotros-none col-3" alt="trabajo-veterinaria" />
  <img src="https://images.pexels.com/photos/6234622/pexels-photo-6234622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="imagenes-nosotros col-3" alt="trabajo-veterinaria" />
  <img src="https://images.pexels.com/photos/6234980/pexels-photo-6234980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="imagenes-nosotros col-3" alt="trabajo-veterinaria" />
  </div>
  </div>
  );
};

export default Nosotros;
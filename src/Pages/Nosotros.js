import React from 'react';

const Nosotros = () => {
  return (
    <div class="m-3">
  <section class="row d-flex align-items-center">
  <div class="d-block w-50 py-4 px-4">
  <h2>Nosotros</h2>
  <p>Veterinaria Huellitas es un centro especializado en la atención integral de tu mascota. Ofrecemos a nuestros clientes una completa atención para los animales, ya sean perros, gatos o especies exóticas. Ofrecemos un servicio higiénico-sanitario completo, asesoramiento nutricional, contamos con servicio de análisis de laboratorio, peluquería, guardería, ente otros.</p>

    <h3>Valores</h3>
    <h4>Profesionalidad</h4>
    <p>Buscamos siempre el mejor procedimiento, adaptándonos a las circunstancias individuales de cada caso.</p>
    <h4>Cercanía</h4>
    <p>Centramos nuestro esfuerzo en la satisfacción del cliente, comprendiendo que, para la mayoría, su mascota es uno más de la familia.</p>
    <h4>Pasión</h4>
    <p>Somos unos enamorados de nuestra profesión y eso nos hace desempeñarla con orgullo y entusiasmo.</p>
    <h4>Actualidad</h4>
    <p>Nos comprometemos a estar en permanente formación, para ofrecer a nuestros pacientes siempre la mejor atención.</p>
    <h4>Responsabilidad</h4>
    <p>Estamos concienciados de que nuestro trabajo repercute en la salud pública y en el bienestar de la sociedad.</p>
  </div>

  <div class="d-block w-50 p-5">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="https://images.pexels.com/photos/6235666/pexels-photo-6235666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://images.pexels.com/photos/6235657/pexels-photo-6235657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://images.pexels.com/photos/7470635/pexels-photo-7470635.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://images.pexels.com/photos/7469225/pexels-photo-7469225.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>
</section>

</div>
  );
};

export default Nosotros;
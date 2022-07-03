import React from 'react';
import '../Pages/UsuarioRegistrado.css'

const UsuarioRegistrado = () => {
  return (
    <div className="consultas-veterinario">
      <h2 className="text-center pt-3">¡Bienvenido, Doc!🐾👋</h2>
      <h4 className="text-center">Estas son todas las consultas del día:</h4>
      <div className="px-5 py-2">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Email</th>
      <th scope="col">Motivo</th>
      <th scope="col">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>prueba1@prueba.com</td>
      <td>Consulta general</td>
      <td>Mi perro caniche tiene manchas en la piel</td>
    </tr>
    <tr>
      <td>prueba2@prueba.com</td>
      <td>Precios de cirugías</td>
      <td>Necesito castrar a mi gato y quisiera precios</td>
    </tr>
    <tr>
      <td>prueba3@prueba.com</td>
      <td>Servicio de peluquería</td>
      <td>¿Hacen peluquería a domicilio? Mi perro es grande y no quiere subir a ningún auto</td>
    </tr>
  </tbody>
</table>
  </div>
    </div>
  );
};

export default UsuarioRegistrado;
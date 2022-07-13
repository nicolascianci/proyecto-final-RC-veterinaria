import React, { useState } from 'react';
import { useEffect } from 'react';
import './UsuarioRegistrado.css'


const UsuarioRegistrado = () => {
  const [consultas, setConsultas] = useState([])
  const getData = async() => {
    const data = await fetch('http://localhost:8000/consultas')
    const json = await data.json()    
    setConsultas(json.consultas)
  }

  const deleteConsulta = async(id) => { 
    const resp = await fetch('http://localhost:8000/consultas', {
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: 
      {
        "Content-Type": "application/json"
      }      
    } )  

  }    

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className="consultas-veterinario">
      <h2 className="text-center pt-3">¡Bienvenido Doc!🐾👋</h2>
      <h4 className="text-center">Estas son todas las consultas del día:</h4>
      <div className="px-5 py-2">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Email</th>
      <th scope="col">Motivo</th>
      <th scope="col">Descripción</th>
    </tr>
  </thead>
  <tbody>
    {
      consultas.map(consulta => (
        <tr>
          <td>{consulta._id}</td>
          <td>{consulta.email}</td>
          <td>{consulta.motivo}</td>
          <td>{consulta.descripcion}</td>
          <td>
            <button onClick={() => deleteConsulta(consulta._id)}>
              Eliminar
            </button>
            </td>
        </tr> 
      ))
    }    
  </tbody>
</table>
  </div>
    </div>
  );
};

export default UsuarioRegistrado;
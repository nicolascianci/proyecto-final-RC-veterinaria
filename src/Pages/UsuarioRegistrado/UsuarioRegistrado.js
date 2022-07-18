import React, { useState } from 'react';
import { useEffect } from 'react';
import './UsuarioRegistrado.css'


const devolverEstado = (Estado) =>{
  console.log(Estado)
  if (Estado === true) {
    return "Resuelta"
  } else {
    return "Pendiente"
  }
}

const refrescar = () =>{
  window.location.reload()
  
}

const UsuarioRegistrado = () => {
  const [consultas, setConsultas] = useState([])
  const getData = async() => {
    const data = await fetch('http://localhost:8000/consultas')
    const json = await data.json()    
    setConsultas(json.consultas)
  }

  const ResponderConsulta = async(id) => { 
    console.log(id)   
    const resp = await fetch('http://localhost:8000/consultas/actualizar', {
      method: 'PUT',
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
      <h2 className="text-center pt-3">¡Bienvenido, Doc!🐾👋</h2>
      <h4 className="text-center">Estas son todas las consultas del día:</h4>
      <div className="px-5 py-2">
      <div class="table-responsive">
        <table class="table" id='tabla'>
            <thead>
              <tr>               
                {/* <th className='size' scope="col" >ID</th>   */}
                <th scope="col">Email</th>
                <th scope="col">Motivo</th>
                <th scope="col">Descripción</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              {                
                consultas.map(consulta =>(
                  <tr id={devolverEstado(consulta.resuelta)}>                    
                    {/* <td className='size'>{consulta._id}</td>                     */}
                    <td>{consulta.email}</td>
                    <td>{consulta.motivo}</td>
                    <td>{consulta.descripcion}</td>
                    <td>{devolverEstado(consulta.resuelta)}</td>                     
                      {consulta.resuelta === false?
                      <td>
                          <button className='btn btn-success' onClick={() => ResponderConsulta(consulta)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                          Responder                                                                                 
                          </button>
                          </td> : <p></p>}                     
                  </tr> 
                ))
              }    
            </tbody>
        </table>
      </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Consulta Realizada</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              La consulta fue resuelta exitosamente
            </div>
            <div class="modal-footer">              
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerra</button>              
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>       
  );  
};

export default UsuarioRegistrado;

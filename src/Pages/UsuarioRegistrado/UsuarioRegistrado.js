import React, { useState } from 'react';
import { useEffect } from 'react';
import './UsuarioRegistrado.css'


const devolverEstado = (Estado) =>{
  console.log(Estado)
  if (Estado === true) {
    return "Resuelta";
  } else {
    return "Pendiente"
  }
}

const refrescar = () => {
  window.location.reload()
}

const UsuarioRegistrado = () => {
  const [consultas, setConsultas] = useState([])
  const getData = async() => {
    const data = await fetch('http://localhost:8000/consultas')
    const json = await data.json()    
    setConsultas(json.consultas)
  }

  const responderConsulta = async(id) => { 
    console.log(id)   
    const resp = await fetch('http://localhost:8000/consultas/actualizar', {
      method: 'PUT',
      body: JSON.stringify(id),
      headers: 
      {
        "Content-Type": "application/json"
      }
    })  

  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="consultas-veterinario">
      <h2 className="text-center pt-3">¡Bienvenido, Doc!🐾👋</h2>
      <h4 className="text-center">Estas son todas las consultas del día:</h4>
      <div className="px-5 py-2">
      <div className="table-responsive">
        <table className="table" id='tabla'>
            <thead>
              <tr>               
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
                    <td><a href={`mailto:${consulta.email}`}>{consulta.email}</a></td>
                    <td>{consulta.motivo}</td>
                    <td>{consulta.descripcion}</td>
                    <td>{devolverEstado(consulta.resuelta)}</td>                     
                      {consulta.resuelta === false?
                      <td>
                          <button className='btn btn-warning border-0 rounded-0' onClick={() => {responderConsulta(consulta); refrescar()
                          }} >
                          Respondida
                          </button>
                          </td> : <p></p>}                     
                  </tr> 
                ))
              }    
            </tbody>
        </table>
      </div>
      {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Consulta respondida</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {refrescar()}}></button>
            </div> */}
            {/* <div className="modal-body">
              La consulta fue resuelta exitosamente
            </div> */}
            {/* <div className="modal-footer">              
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {refrescar()}}>Actualizar</button>              
            </div> */}
          </div>
        </div>
    //   </div>
    //   </div>
    // </div>       
  );  
};

export default UsuarioRegistrado;

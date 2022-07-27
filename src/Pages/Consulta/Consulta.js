import React from 'react';
import './Consulta.css';
import { useForm } from "react-hook-form";
import imageConsulta from '../assests/images/image-consulta.jpg';

const Consulta = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async(data) => {
    const resp = await fetch('http://localhost:8000/consultas', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }    
    })
   
  }

  const resetearForm = () => {
    document.getElementById("formconsulta").reset()
  }


  return (
    <div className="contacto d-flex justify-content-between align-items-center p-5">
      <div className="foto-texto-card card text-white w-50 border-0 rounded-0">
  <img src={imageConsulta} className="card-img rounded-0 " alt="consulta-veterinaria" />
  <div className="card-img-overlay d-flex align-items-center">
  <h5 className="text-consulta m-5 text-center">En La Huellita Veterinaria <strong>queremos acompañar a tu mascota en todo momento</strong>. Podés enviarnos tu consulta por aquí y nuestros veterinarios van a contactarte a la brevedad aclarando todas tus dudas.</h5>
</div>
</div>

      <div className="formulario-consultas w-50 p-3">
      <form onSubmit={handleSubmit(onSubmit)} id="formconsulta">
        <div className="mb-2">
          <label for="exampleInputEmail1" className="fs-5 form-label text-white mb-0">Email</label>
          <input type="email" className="fs-5 form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email")} maxLength="35" pattern='^[^@]+@[^@]+\.[a-zA-Z]{2,}$' placeholder='nombre@email.com' required/>
        </div>
        <div className="mb-2">
          <label for="exampleInputMotivo" className="fs-5 form-label text-white mb-0">Motivo</label>
          <input type="text" className="fs-5 form-control rounded-0" id="exampleInputPassword1" aria-describedby="motivoHelp" {...register("motivo")} maxLength="30" placeholder="Consulta clínica/Servicios/Costos etc." required/>
        </div>
        <div className="mb-2">
          <label for="exampleInputDescripcion" className="fs-5 form-label text-white mb-0">Descripcion</label>
          <textarea className="form-control rounded-0" id="exampleInputPassword1" aria-describedby="descripcionHelp"{...register("descripcion")} cols="20" rows="3" maxLength="500" placeholder="Sé puntual y conciso" required></textarea>
        </div>
        <button type="submit" className="btn-consultas btn rounded-0 border-0 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{resetearForm()}} >Enviar</button>
      </form>          
      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content p-3 border-0 rounded-0">
            <h4 className="modal-body text-center">
            <strong>¡Tu mensaje fue enviado!</strong> <br /> Nos contactaremos con vos a la brevedad!
            </h4>
            <div className="modal-footer d-flex justify-content-center">
              <a href="/">
                <button type="button" className="btn btn-warning border-0 rounded-0 p-3 mb-0">Volver a la página principal</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulta;
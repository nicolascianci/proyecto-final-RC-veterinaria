import React from 'react';
import './Consulta.css';
import { useForm } from "react-hook-form";
import imageConsulta from '../assests/images/image-consulta.jpg'

const Consulta = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async(data) => {
    const resp = await fetch('https://heroku-veterinaria-rolling.herokuapp.com/consultas', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
   
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label for="exampleInputEmail1" className="fs-5 form-label text-white mb-0">Email</label>
          <input type="email" className="fs-5 form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email")} required/>
        </div>
        <div className="mb-2">
          <label for="exampleInputMotivo" className="fs-5 form-label text-white mb-0">Motivo</label>
          <input type="text" className="fs-5 form-control rounded-0" id="exampleInputPassword1" aria-describedby="motivoHelp" {...register("motivo")} required/>
        </div>
        <div className="mb-2">
          <label for="exampleInputDescripcion" className="fs-5 form-label text-white mb-0">Descripcion</label>
          <textarea className="form-control rounded-0" id="exampleInputPassword1" aria-describedby="descripcionHelp"{...register("descripcion")} cols="20" rows="3" required></textarea>
        </div>
        <button type="submit" className="btn-consultas btn rounded-0 border-0 px-5">Enviar</button>
      </form>          
      </div>
    </div>
  );
};

export default Consulta;
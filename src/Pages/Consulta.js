import React from 'react';
import './Consulta.css';
import { useForm } from "react-hook-form";

const Consulta = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async(data) => {
    console.log(data)
    const resp = await fetch('http://localhost:8000/consultas', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await resp.json()

    console.log(json)
  }
  return (
    <section className="contacto-section d-inline-flex justify-content-evenly align-items-center p-5">
      <div className="foto-texto-card card bg-dark text-white col-6 border-0 rounded-0">
  <img src="https://images.pexels.com/photos/7195118/pexels-photo-7195118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img rounded-0 " alt="..." />
  <div className="card-img-overlay d-flex align-items-center">
  <h5 className="m-5 text-center">Veterinaria Huellitas es un <strong>centro especializado en la atención integral</strong> de tu mascota. Ofrecemos a nuestros clientes una completa atención para los animales, ya sean perros, gatos o especies exóticas, un servicio higiénico-sanitario completo, asesoramiento nutricional, análisis de laboratorio, peluquería, guardería, entre otros.</h5>
</div>
</div>

      <div className="col-6 p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label for="exampleInputEmail1" className="fs-5 form-label text-white mb-0">Email</label>
          <input type="email" className="fs-5 form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email")}/>
        </div>
        <div className="mb-2">
          <label for="exampleInputMotivo" className="fs-5 form-label text-white mb-0">Motivo</label>
          <input type="text" className="fs-5 form-control rounded-0" id="exampleInputPassword1" aria-describedby="motivoHelp" {...register("motivo")}/>
        </div>
        <div className="mb-2">
          <label for="exampleInputDescripcion" className="fs-5 form-label text-white mb-0">Descripcion</label>
          <textarea className="form-control rounded-0" id="exampleInputPassword1" aria-describedby="descripcionHelp"{...register("descripcion")} cols="20" rows="3"></textarea>
        </div>
        <button type="submit" className="btn-consultas btn rounded-0 border-0 px-5">Enviar</button>
      </form>          
      </div>
    </section>
  );
};

export default Consulta;
import React from 'react';
import { useForm } from "react-hook-form";
import './Contacto.css';

const Contacto = () => {

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
    
    <section className="contacto-section d-flex justify-content-center align-items-center py-3">
      <iframe title="mapa" className="mapa m-3" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.408879082126!2d-65.2072018!3d-26.8367009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1656373921009!5m2!1ses-419!2sar" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email")}/>
      </div>
      <div class="mb-3">
        <label for="exampleInputMotivo" class="form-label text-white">Motivo</label>
        <input type="text" class="form-control" id="exampleInputPassword1" aria-describedby="motivoHelp" {...register("motivo")}/>
      </div>
      <div class="mb-3">
        <label for="exampleInputDescripcion" class="form-label text-white">Descripcion</label>
        <input type="text" class="form-control" id="exampleInputPassword1" aria-describedby="descripcionHelp"{...register("descripcion")}/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </section>
  );
};

export default Contacto;
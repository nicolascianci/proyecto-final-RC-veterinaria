import { useForm } from "react-hook-form";
import './Login.css';
import logoLogin from '../Components/assests/images/logo.png'

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async(data) => {
    const resp = await fetch('http://localhost:8000/login', {
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
    <div className="formulario-login d-inline-flex">
      <div className="col-6 d-flex align-items-center justify-content-end">
        <img src={logoLogin} className="w-75" alt="" />
        </div>

        <div className="col-6 d-flex align-items-center justify-content-start">
    <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-3">
        <label for="exampleInputEmail1" className="text-light form-label fs-3">Email</label>
        <input type="email" className="border-0 rounded-0 form-control fs-5 p-2" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email")} required/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" className="text-light form-label fs-3">Contraseña</label>
        <input type="password" className="border-0 rounded-0 form-control fs-5 p-2" id="exampleInputPassword1" {...register("password")} required/>
      </div>
      <button type="submit" class="btn-login btn border-0 rounded-0">Ingresar</button>
    </form>
    </div>
    </div>
  );
}
 
export default Login;
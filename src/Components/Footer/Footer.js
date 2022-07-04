import React from 'react';
import img from '../assests/images/logo.png'
import './Footer.css'
const Footer = () => {
  return (    
    <div className='footer d-flex justify-content-center'>
      <img className="img m-0" src={img} alt="" />
      <h6 className=" text-center d-flex align-items-center">Todos los derechos reservados a Veterinaria Huellitas | 2022</h6>
    </div>    
  );
};

export default Footer;
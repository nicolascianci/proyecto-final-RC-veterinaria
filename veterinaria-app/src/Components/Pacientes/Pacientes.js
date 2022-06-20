import React from 'react';
import { useState, useEffect } from 'react';


const Pacientes = () => {
  const [animales, setAnimales] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        return response.json()
      })
      .then((animales) => {
        setAnimales(animales)
      })
  }, [])

  return (
    <div className="w-100">
      <div className="w-25 h-25">
  <img src={animales.message} className="card-img-top rounded-circle" alt="..." />
</div>
    </div>
  );
};

export default Pacientes;
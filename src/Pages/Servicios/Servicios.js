import React from 'react';
import ButtonConsulta from '../../Components/ButtonConsulta/ButtonConsulta';
import './Servicios.css';


const Servicios = () => {
  return (
  <div className="servicios">
  <h4 className="text-center m-4">Veterinaria Huellitas busca <strong>cubrir todas las necesidades de salud</strong> para tu mascota. A lo largo de los años nos hemos caracterizado por brindar a los animales la atención más completa e integral con las tecnologías más modernas</h4>

<div className="row d-flex justify-content-around my-3 mx-5">
    <div className="card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/6235118/pexels-photo-6235118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top rounded-0" alt="servicios-veterinaria" />
      <div className="card-body">
        <h5 className="title-card card-text">Preventiva</h5>
        <button type="button" className="btn-vermas btn border-0 border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal1"> Ver más </button>
      </div>
    </div>

    <div className="card-servicios card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/6816869/pexels-photo-6816869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top rounded-0" alt="servicios-veterinaria" />
      <div className="card-body">
        <h5 className="title-card card-text">Laboratorio</h5>
        <button type="button" className="btn-vermas btn border-0 border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal2"> Ver más </button>
      </div>
    </div>

    <div className="card-servicios card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/8413323/pexels-photo-8413323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top rounded-0" alt="servicios-veterinaria" />
      <div className="card-body">
        <h5 className="title-card card-text">Radiología Digital</h5>
        <button type="button" className="btn-vermas btn border-0 border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal3"> Ver más </button>
      </div>
    </div>

    <div className="card-servicios card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/6234610/pexels-photo-6234610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top rounded-0" alt="servicios-veterinaria" />
      <div className="card-body">
        <h5 className="title-card card-text">Ecografía</h5>
        <button type="button" className="btn-vermas btn border-0 border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal4"> Ver más </button>
      </div>
    </div>

    <div className="card-servicios card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/6816858/pexels-photo-6816858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top rounded-0" alt="servicios-veterinaria" />
      <div className="card-body">
        <h5 className="title-card card-text">Peluquería</h5>
        <button type="button" className="btn-vermas btn border-0 border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal5"> Ver más </button>
      </div>
    </div>

    <div className="card-servicios card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/1350593/pexels-photo-1350593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top rounded-0" alt="servicios-veterinaria" />
      <div className="card-body">
        <h5 className="title-card card-text">Cirugía</h5>
        <button type="button" className="btn-vermas btn border-0 border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal6"> Ver más </button>
      </div>
    </div>

    <div className="card-servicios card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/7470752/pexels-photo-7470752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top rounded-0" alt="servicios-veterinaria" />
      <div className="card-body">
        <h5 className="title-card card-text">Dermatología</h5>
        <button type="button" className="btn-vermas btn border-0 border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal7"> Ver más </button>
      </div>
    </div>

    <div className="card-servicios card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/6235240/pexels-photo-6235240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top rounded-0" alt="servicios-veterinaria" />
      <div className="card-body">
        <h5 className="title-card card-text">Oftalmología</h5>
        <button type="button" className="btn-vermas btn border-0 border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal8"> Ver más </button>
      </div>
    </div>
    </div>



<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content border-0 rounded-0 border-0 rounded-0">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Medicina preventiva</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-center">
        <p>Te daremos los mejores consejos para el cuidado de tu mascota.Informate sobre los planes vacunales, desparacitar, cómo educar y cómo alimentar cachorritos. Hacemos planes de prevención para viajes al extranjero, mascotas geriátricas o que sufren ciertas patologías..</p>
      <ButtonConsulta />
      </div>
     </div>
    </div>
  </div>

  <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content border-0 rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Análisis de Laboratorio</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body text-center">
          <p>Nuestro Centro cuenta con equipamiento para hacer <strong>analíticas in situ </strong> . De esta manera se aceleran los procedimientos y podemos emitir un diagnóstico e implementar el tratamiento adecuado de manera rápida y efectiva.</p>
          <ButtonConsulta />
        </div>
       </div>
      </div>
    </div>

    <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content border-0 rounded-0">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Radiología Digital</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <p>La radiología ofrece información sobre el estado de tejidos blandos y de huesos y articulaciones. Utilizamos la <strong>técnica digital</strong> que permite obtener una imagen mucho más clara. También facilitamos la difusión y utilización de las imágenes, puesto que se almacenan como archivos de imagen fácilmente compartibles con el cliente y/o veterinarios remitentes.</p>
            <ButtonConsulta />
          </div>
         </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content border-0 rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ecografía</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <p>La ecografía ofrece información sobre el estado de los órganos internos de manera no invasiva, inmediata y precisa. Además, es una herramienta muy útil en la toma de muestras y punciones, al hacerlas ecoguiadas.</p>
              <ButtonConsulta />
            </div>
           </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content border-0 rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Peluquería</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center">
                <p>Realizamos cortes comerciales y con tijera. Cada animal es bañado con el champú y acondicionador más adecuado para su tipo de piel y pelo. Además, cortamos las uñas, limpiamos los oídos y vacíamos los sacos anales. Procuramos también tratamientos de champuterapia y corte terapéutico a los animales con problemas dermatológicos.</p>
                <ButtonConsulta />
              </div>
             </div>
            </div>
          </div>

          <div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content border-0 rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Medicina preventiva</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-center">
                  <p>Hacemos cirugías de esterilización, gastrointestinal, de hígado y sistema biliar, de vejiga, uréteres y riñones, adrenales, bazo y páncreas.Reparamos hernias abdominales. Hacemos profilaxis dental, extracción de piezas, plastias cutáneas y cierre de heridas traumáticas.También realizamos cirugías con <strong>láser de CO2</strong></p>
                  <ButtonConsulta />
                </div>
               </div>
              </div>
            </div>

            <div className="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content border-0 rounded-0">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Dermatología</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body text-center">
                    <p>En Veterinaria Huellitas entendemos que un buen diagnóstico es primordial y para ello realizamos citologías, tricogramas, pruebas de alergia y cualquier otro tipo de pruebas para detectar el problema.</p>
                    <ButtonConsulta />
                  </div>
                 </div>
                </div>
              </div>

              <div className="modal fade" id="exampleModal8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content border-0 rounded-0">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Oftalmología</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                      <p>Tratamos enfermedades como la queratoconjuntivitis seca, úlceras corneales indolentes o las anomalías en los párpados, patologías comunes en determinadas razas.</p>
                      <ButtonConsulta />
                    </div>
                   </div>
                  </div>
                </div>

  </div>
  )
};

export default Servicios;
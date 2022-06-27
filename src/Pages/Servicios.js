import React from 'react';
import ButtonTurno from '../Components/ButtonTurno/ButtonTurno';
import './Servicios.css';

const Servicios = () => {
  return (
      <div>

  <section class="row d-flex justify-content-evenly m-1">

    <div class="card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/6235118/pexels-photo-6235118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top rounded-0" alt="..." />
      <div class="card-body">
        <h5 class="card-text">Medicina Preventiva</h5>
        <button type="button" class="btn btn-info border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal1"> Ver más </button>
      </div>
    </div>

    <div class="ds-servicios card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/6816869/pexels-photo-6816869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top rounded-0" alt="..." />
      <div class="card-body">
        <h5 class="card-text">Análisis de Laboratorio</h5>
        <button type="button" class="btn btn-info border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal2"> Ver más </button>
      </div>
    </div>

    <div class="ds-servicios card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/8413323/pexels-photo-8413323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top rounded-0" alt="..." />
      <div class="card-body">
        <h5 class="card-text">Radiología Digital</h5>
        <button type="button" class="btn btn-info border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal3"> Ver más </button>
      </div>
    </div>

    <div class="ds-servicios card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/6234610/pexels-photo-6234610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top rounded-0" alt="..." />
      <div class="card-body">
        <h5 class="card-text">Ecografía</h5>
        <button type="button" class="btn btn-info border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal4"> Ver más </button>
      </div>
    </div>

    <div class="ds-servicios card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/6816858/pexels-photo-6816858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top rounded-0" alt="..." />
      <div class="card-body">
        <h5 class="card-text">Peluquería</h5>
        <button type="button" class="btn btn-info border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal5"> Ver más </button>
      </div>
    </div>

    <div class="ds-servicios card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/1350593/pexels-photo-1350593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top rounded-0" alt="..." />
      <div class="card-body">
        <h5 class="card-text">Cirugía</h5>
        <button type="button" class="btn btn-info border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal6"> Ver más </button>
      </div>
    </div>

    <div class="ds-servicios card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/7470752/pexels-photo-7470752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top rounded-0" alt="..." />
      <div class="card-body">
        <h5 class="card-text">Dermatología</h5>
        <button type="button" class="btn btn-info border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal7"> Ver más </button>
      </div>
    </div>

    <div class="ds-servicios card-servicios card border-0 rounded-0 mb-2 p-0">
      <img src="https://images.pexels.com/photos/6235240/pexels-photo-6235240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top rounded-0" alt="..." />
      <div class="card-body">
        <h5 class="card-text">Oftalmología</h5>
        <button type="button" class="btn btn-info border rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal8"> Ver más </button>
      </div>
    </div>



<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Medicina preventiva</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <p>Te daremos los mejores consejos para el cuidado de tu mascota.Informate sobre los planes vacunales, cómo desparasitar a tus animales, cómo educar a los cachorritos o qué alimentación darles. Hacemos planes de prevención para animales que van a viajar al extranjero, geriátricos o que sufren determinadas patologías. Realizamos chequeos periódicos de salud, análisis de leishmania (enfermedad del mosquito), filaria (gusano del corazón), controles de peso y mucho más.</p>
      <ButtonTurno />
      </div>
     </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Análisis de Laboratorio</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <p>Nuestro Centro cuenta con equipamiento para hacer <strong>analíticas in situ </strong> . De esta manera se aceleran los procedimientos y podemos emitir un diagnóstico e implementar el tratamiento adecuado de manera rápida y efectiva.</p>
          <ButtonTurno />
        </div>
       </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Radiología Digital</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <p>La radiología ofrece información sobre el estado de tejidos blandos y de huesos y articulaciones. Utilizamos la <strong>técnica digital</strong> que permite obtener una imagen mucho más clara. También facilitamos la difusión y utilización de las imágenes, puesto que se almacenan como archivos de imagen fácilmente compartibles con el cliente y/o veterinarios remitentes.</p>
            <ButtonTurno />
          </div>
         </div>
        </div>
      </div>

      <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Ecografía</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
              <p>La ecografía ofrece información sobre el estado de los órganos internos de manera no invasiva, inmediata y precisa. Además, es una herramienta muy útil en la toma de muestras y punciones, al hacerlas ecoguiadas.</p>
              <ButtonTurno />
            </div>
           </div>
          </div>
        </div>

        <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Peluquería</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center">
                <p>Realizamos cortes comerciales y con tijera. Cada animal es bañado con el champú y acondicionador más adecuado para su tipo de piel y pelo. Además, cortamos las uñas, limpiamos los oídos y vacíamos los sacos anales. Procuramos también tratamientos de champuterapia y corte terapéutico a los animales con problemas dermatológicos.</p>
                <ButtonTurno />
              </div>
             </div>
            </div>
          </div>

          <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Medicina preventiva</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                  <p>Hacemos cirugías de esterilización, cirugía gastrointestinal, de hígado y sistema biliar, de vejiga, uréteres y riñones, adrenales, bazo y páncreas.Reparamos hernias abdominales, inguinales y perineales. Hacemos profilaxis dental, extracción de piezas dentarias, plastias cutáneas y cierre de heridas traumáticas.También realizamos cirugías con <strong>láser de CO2</strong>. Su aplicación ofrece importantes ventajas en cuanto a acortamiento del procedimiento quirúrgico, cicatrización y recuperación del paciente.</p>
                  <ButtonTurno />
                </div>
               </div>
              </div>
            </div>

            <div class="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Dermatología</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body text-center">
                    <p>En Veterinaria Huellitas entendemos que un buen diagnóstico es primordial y para ello realizamos citologías, tricogramas, pruebas de alergia y cualquier otro tipo de pruebas para detectar el problema.</p>
                    <ButtonTurno />
                  </div>
                 </div>
                </div>
              </div>

              <div class="modal fade" id="exampleModal8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Oftalmología</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                      <p>Tratamos enfermedades como la queratoconjuntivitis seca, úlceras corneales indolentes o las anomalías en los párpados, patologías comunes en determinadas razas.</p>
                      <ButtonTurno />
                    </div>
                   </div>
                  </div>
                </div>

  </section>
  </div>
  )
};

export default Servicios;
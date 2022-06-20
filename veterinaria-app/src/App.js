import './App.css';
// import ButtonSesion from './Components/ButtonSesion/ButtonSesion';
// import ButtonTurno from './Components/ButtonTurno/ButtonTurno';
import Cards from './Components/Cards/Cards';
import Pacientes from './Components/Pacientes/Pacientes';

function App() {
  return (
    <div className="App">
      {/* <ButtonSesion />
      <ButtonTurno /> */}
      <Cards />
      <Pacientes />
     </div>
  );
}

export default App;

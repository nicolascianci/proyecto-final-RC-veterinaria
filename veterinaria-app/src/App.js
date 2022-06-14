import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cards from './Components/Cards/Cards';
import Pacientes from './Components/Pacientes/Pacientes';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Cards />
      <Pacientes /> 

    <Routes>
     <Route path="/" element={<Home />} />
     </Routes>
     </div>
  );
}

export default App;

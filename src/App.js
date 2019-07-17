import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './componentes/Formulario'

function App() {

  // Utilizar useState con 3 states diferentes
  const[artista, agregarArtista] = useState('');
  const[letra, agregarLetra] = useState([]);
  const[info, agregarInfo] = useState({});

  return (
    <Fragment>
      <Formulario />
    </Fragment>
  );
}
export default App;
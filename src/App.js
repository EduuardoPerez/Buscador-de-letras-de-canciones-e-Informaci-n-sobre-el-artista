import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './componentes/Formulario'

function App() {

  // Utilizar useState con 3 states diferentes
  const[artista, agregarArtista] = useState('');
  const[letra, agregarLetra] = useState([]);
  const[info, agregarInfo] = useState({});

  // Método para consultar la API de letras de canciones
  const consultarAPILetra = busqueda => {
    console.log(busqueda)
  }

  return (
    <Fragment>
      <Formulario 
        consultarAPILetra={consultarAPILetra}
      />
    </Fragment>
  );
}
export default App;
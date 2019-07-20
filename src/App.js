import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Formulario from './componentes/Formulario';

function App() {

  // Utilizar useState con 3 states diferentes
  const[artista, agregarArtista] = useState('');
  const[letra, agregarLetra] = useState([]);
  const[info, agregarInfo] = useState({});

  // Método para consultar la API de letras de canciones
  const consultarAPILetra = async busqueda => {
    const {artista, cancion} = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    
    // Consultar la API
    const resultado = await axios(url);

    // Almacenar la letra en el state
    agregarLetra(resultado.lyrics);
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
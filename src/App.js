import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Formulario from './componentes/Formulario';
import Cancion from './componentes/Cancion';

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

    // Almacenar el artista que se buscó
    agregarArtista(artista);

    // Almacenar la letra en el state
    agregarLetra(resultado.data.lyrics);
  }

  // Método para consultar la API de información
  const consultarAPIInfo = async () => {
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
    const resultado = await axios(url);
    agregarInfo(resultado.data.artists[0]);
  }

  useEffect(() => {
    consultarAPIInfo();
  },[artista]); // Cuando haya un artista o cuando se hagan cambios en el
                // state artista, se ejecuta el useEffect

  return (
    <Fragment>
      <Formulario 
        consultarAPILetra={consultarAPILetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
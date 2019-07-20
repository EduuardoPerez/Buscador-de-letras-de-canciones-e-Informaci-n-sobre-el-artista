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

    // Almacenar la letra en el state
    agregarLetra(resultado.data.lyrics);
  }

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
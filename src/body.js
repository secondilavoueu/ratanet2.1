import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import Fundo from './fundo (2).png'; // Corrija o caminho da imagem de fundo

function Body() {
  return (

    <div className="container">
      <img src={Fundo} alt="Imagem" />
      <button type="button" class="btn btn-outline-light">Light</button>
    </div>

  );
}

export default Body;
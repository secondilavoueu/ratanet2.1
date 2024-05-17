import React from 'react';
import './App.css'; // Certifique-se de que o arquivo App.css existe
import Nav from './menu.js';
import Botao from './botao';
import Body from './body';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      
      <Nav />
      <Botao />
      <Body />
      <Footer /> 
      

    </div>
  );
}

export default App;
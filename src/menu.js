import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import Logo from '../src/logooo.png'

function Nav() {
  return (

    <nav class="menu">

      <div class="logo">
          <img src={Logo} class="d-block w-100" alt="..."></img> 
      </div>

        <div class='nav'>
            <nav class="navbar navbar-expand-lg navegaçao">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
            <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search"></input>
                      <button class="btn btn-light" type="submit">Procurar</button>
            </form>
            </div>
            </nav>
        </div>
        
    </nav>
  )
}

export default Nav;

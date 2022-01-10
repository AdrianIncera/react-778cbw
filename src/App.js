


/* JAVA */

//ArrayList<String> blabla = new ArrayList<>();
//ArrayList<String> blabla2 = new LinkedList<>();

import React from 'react';

import { PaginaListas } from './components/PaginaListas';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Home} from './components/Home';
import {Perfil} from './components/Perfil';

export function App() {
  return (
    
    <Router>
      <nav>
        <h1>Mi aplicación</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/listas">Lista de tareas</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>

      
        <Route path="/" exact component={Home} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/listas" component={PaginaListas} />
      </Router>
    
  );
}
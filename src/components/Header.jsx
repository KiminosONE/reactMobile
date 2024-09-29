// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Mi Aplicación</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre Nosotros</Link>
      </nav>
    </header>
  );
}

export default Header;

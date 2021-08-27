import React from 'react';
import './App.css';
import bikeGuy from './resources/bike-guy.jpg'
import MainImageDescription from './components/MainImageDescription/MainImageDescription'

function App() {
  return (
    <div className="App grid-container">
      {/* Left side */}
      <div className="grid-item">  
        <div className="vertical-sub-grid-containers">
          {/* Logo */}
          <div className="grid-item">logo</div>
          {/* Menu, Imagen y Descripcion principal */}
          <div className="grid-item">
            <div className="center-sub-grid-container">
              <div className="grid-item">a</div>
              <div className="grid-item">
                <div className="central-image-container">
                  <img className="central-image" src={bikeGuy} alt="profesional guy riding bike on the dirt" />
                </div>
              </div>
              <div className="grid-item">
                <h3>LOEWE Esencia Eau de Parfum</h3>
                <p>The full-set of the LOEWE Esencia family.</p>
                <p>Get yours on perfumesloewe.com and select our exclusive complimentary wrapping.</p>
              </div>
            </div>
          </div>
          {/* Descripcion de la imagen principal, y numero de slider mostrado */}
          <div className="grid-item">
            <div className="center-sub-grid-container">
              <div className="grid-item">a</div>
              <div className="grid-item"><MainImageDescription></MainImageDescription></div>
              <div className="grid-item">c</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="grid-item right-side"></div>
    </div>
  );
}

export default App;

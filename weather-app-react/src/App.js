import React, {useState} from 'react'
import axios from 'axios'

function App() {

// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-44&lon=44&appid=93845c8636c0cf3f6e1026a3d95e9deb'
  
  
  return (
    <div className="app">
      <div className="container">
        <div className="top">
        <div className="location">
          <p>London</p>
        </div>
        <div className="temp">
          <h1>65 °C </h1>
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65°C</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

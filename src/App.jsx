import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import Weather from './Weather';
import { TiWeatherPartlySunny } from 'react-icons/ti';


function App() {

   const [ showWeather, setShowWeather ] = useState(false);

  
  return (
    <div className='front_main'>
      <h2>
        ☕️ Log in your Coffee <span className='temp_icon'
        onClick={()=> setShowWeather(!showWeather)}><TiWeatherPartlySunny /></span>
        { showWeather ? <Weather /> : null }
      </h2>
      <Card />
    </div>
  )
}

export default App
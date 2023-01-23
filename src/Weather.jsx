import React from 'react';
import { useState, useEffect } from 'react'
import CityTemp from './CityTemp';


const Weather = () => {
  
  const [lat, setLat] = useState([52.51631]);
  const [long, setLong] = useState([13.31748]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
  
        await fetch(`${import.meta.env.VITE_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.VITE_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
        });
      }
      fetchData();
    }, [lat,long])
    
    return (
      <div className="App">
        {(typeof data.main != 'undefined') ? (
          <CityTemp weatherData={data}/>
        ): (
          <div></div>
        )}
        
      </div>
    );
}

export default Weather
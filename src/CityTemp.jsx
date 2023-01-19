import React from 'react';
import moment from 'moment';
import './city_temp.css';



const CityTemp = ({ weatherData }) => {
  return (
    <section className='temp_wrapper'>
        <p>📍 {weatherData.name}</p>
        <p>Temprature 🌡️ {weatherData.main.temp} &deg;C</p>
        <p>Sunrise ☀️ {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset 🌞 {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>⛅️ {weatherData.weather[0].main}</p>
        <p>Humidity 💧 {weatherData.main.humidity} %</p>
        <p>{moment().format('dddd')}</p>
        <p>📆 {moment().format('LL')}</p>
    </section>
  )
}

export default CityTemp
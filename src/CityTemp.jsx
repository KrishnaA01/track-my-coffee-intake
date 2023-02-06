import React from "react";
import moment from "moment";
import "./city_temp.css";

// CityTemp is now navbar

const CityTemp = ({ weatherData }) => {
  return (
    <ul className="temp_wrapper">
      <li>📍 {weatherData.name} </li> 
      <li>Temprature 🌡️ {weatherData.main.temp} &deg;C</li>
      <li>Sunrise ☀️{" "}
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
      </li>
      <li>
        Sunset 🌞{" "}
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
      </li>
      <li>⛅️ {weatherData.weather[0].main}</li>
      <li>Humidity 💧 {weatherData.main.humidity} %</li>
      <li>{moment().format("dddd")}</li>
      <li>📆 {moment().format("LL")}</li>
    </ul>
  );
};

export default CityTemp;

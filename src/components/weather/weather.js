import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState('');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5990947e53558a171ab25e9baf8aea60&units=metric`);
      setWeather(response.data);

    } catch(error) {
      console.log("error fetching in weather data", error)

    }
  };

  const handleClick = () => {
    fetchWeather();
  };

  return (
    <div>
      <div className="weather-container">
        <h1 className="weather-title">Weather App</h1>
        <div className="weather-card">
          <div className="weather-location">
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={handleCityChange}
              className="weather-input"
            />
            <button onClick={handleClick} className="weather-button">
              Get Weather
            </button>
          </div>

          {weather && (
            <div className="weather-info">
            <h2 className="weather-city">{weather.name}</h2>
            <p className="weather-temp">Temperature: {weather.main.temp}°C</p>
            <p className="weather-description">{weather.weather[0].description}</p>
          </div>  
          
          )}


          
        </div>
      </div>
    </div>
  );
}

export default Weather;

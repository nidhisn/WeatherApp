import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import Navigation from "../Navigation/Navigation";
import { useNavigate } from "react-router-dom";

import clear_icon from "../../assets/clear.png";
import cloud_icon from "../../assets/cloud.png";
import drizzle_icon from "../../assets/drizzle.png";
import rain_icon from "../../assets/rain.png";
import snow_icon from "../../assets/snow.png";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (!city) {
      alert("Enter city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Error fetching weather data");
        return;
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.round(data.main.temp),
        location: data.name,
        icon: icon,
        rain: data.rain ? `${data.rain["1h"]} mm` : "0 mm",
        uvIndex: Math.random().toFixed(1) * 10,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };

  useEffect(() => {
    search("Germany");
  }, []);

  return (
    <div className="weather">
      <Navigation />

      <div className="left_section">
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder="Search" />
          <img
            src="/search.png"
            alt="Search Icon"
            onClick={() => search(inputRef.current.value)}
          />
        </div>

        <div className="current-city">
          {weatherData ? (
            <>
              <div className="city-temp-icon-container">
                <div className="city-temp">
                  <p className="location">{weatherData.location}</p>
                  <p className="rain">Chance of rain: {weatherData.rain}</p>
                  <p className="temperature">{weatherData.temperature}°C</p>
                </div>
                <div className="city-icon">
                  <img
                    src={weatherData.icon}
                    alt="Weather Icon"
                    className="weather-icon"
                  />
                </div>
              </div>

              <div className="today-forcast">
                <p className="today-forcast-p">TODAY'S FORECAST</p>
                <div className="today-container">
                  {["6:00 AM", "9:00 AM", "12:00 PM", "6:00 PM", "9:00 PM"].map(
                    (time, index) => (
                      <div className="one" key={index}>
                        <p>{time}</p>
                        <img src={weatherData.icon} alt="Forecast Icon" />
                        <p>{weatherData.temperature - index}°C</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="weather-data">
                <p className="weather-data-p">AIR CONDITIONS</p>
                <div className="weather-data-container">
                  <div className="col">
                    <img src="/humidity.png" alt="Humidity Icon" />
                    <div>
                      <span>Humidity</span>
                      <p>{weatherData.humidity}%</p>
                    </div>
                  </div>

                  <div className="col">
                    <img src="/wind.png" alt="Wind Icon" />
                    <div>
                      <span>Wind</span>
                      <p>{weatherData.windSpeed} Km/hr</p>
                    </div>
                  </div>

                  <div className="col">
                    <img src="/chanceofrain.png" alt="Rain Icon" />
                    <div>
                      <span>Chance of rain</span>
                      <p>{weatherData.rain}</p>
                    </div>
                  </div>

                  <div className="col">
                    <img src="/uvindex.png" alt="UV Index Icon" />
                    <div>
                      <span>UV Index</span>
                      <p>{weatherData.uvIndex}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
      </div>

      <div className="right_section">
        <div className="seven-day-forcast">
          <p className="seven-forcast-p">7-DAY FORECAST</p>
          <div className="seven-day-container">
            {[
              "Today",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ].map((day, index) => (
              <div className="day-one" key={index}>
                <p>{day}</p>
                <img
                  src={weatherData?.icon || clear_icon}
                  alt="Forecast Icon"
                />
                <p>Sunny</p>
                <p>36/22</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

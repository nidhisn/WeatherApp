import React from "react";
import { useState } from "react";
import styles from "./Map.module.css";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import clear_icon from "../../assets/clear.png";
import cloud_icon from "../../assets/cloud.png";
import drizzle_icon from "../../assets/drizzle.png";
import rain_icon from "../../assets/rain.png";
import snow_icon from "../../assets/snow.png";

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

const Map = () => {
  const [weatherList, setWeatherList] = useState([]); // Stores multiple city weather data
  const [selectedWeather, setSelectedWeather] = useState(null); // Selected city for right section

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
      const newWeatherData = {
        id: Date.now(),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.round(data.main.temp),
        location: data.name,
        icon: icon,
        rain: data.rain ? `${data.rain["1h"]} mm` : "0 mm",
        uvIndex: (Math.random() * 10).toFixed(1),
        time: new Date().toLocaleTimeString(),
      };

      // Updating list with the latest search
      setWeatherList((prevList) => [newWeatherData, ...prevList]);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }

    const containerStyle = {
      width: "400px",
      height: "400px",
    };

    const center = {
      lat: -3.745,
      lng: -38.523,
    };
  };
  return (
    <div className={styles.map}>
      <Navigation />
      <div className={styles.left_section}>
        <SearchBar onSearch={search} />
      </div>
    </div>
  );
};

export default Map;

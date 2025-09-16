import React, { useState } from "react";
import styles from "./Map.module.css";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";
import { useSettings } from "../../contexts/SettingsContext";

import clear_icon from "../../assets/clear.png";
import cloud_icon from "../../assets/cloud.png";
import drizzle_icon from "../../assets/drizzle.png";
import rain_icon from "../../assets/rain.png";
import snow_icon from "../../assets/snow.png";

const Map = () => {
  const { convertTemperature, getTemperatureUnit } = useSettings();
  const [selectedCity, setSelectedCity] = useState(null);

  // Sample city data with positions and weather
  const cities = [
    {
      id: 1,
      name: "Bilbao",
      temperature: 27,
      weather: "rain",
      icon: drizzle_icon,
      x: 15, // percentage from left
      y: 25, // percentage from top
    },
    {
      id: 2,
      name: "Barcelona",
      temperature: 29,
      weather: "clear",
      icon: clear_icon,
      x: 75,
      y: 20,
    },
    {
      id: 3,
      name: "Madrid",
      temperature: 31,
      weather: "clear",
      icon: clear_icon,
      x: 45,
      y: 45,
    },
    {
      id: 4,
      name: "Malaga",
      temperature: 33,
      weather: "partly-cloudy",
      icon: cloud_icon,
      x: 40,
      y: 75,
    },
  ];

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const handleCityCardClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className={styles.map}>
      <Navigation />
      <div className={styles.map_container}>
        {/* Search Bar */}
        <div className={styles.search_container}>
          <SearchBar />
        </div>

        {/* Map Area */}
        <div className={styles.map_area}>
          {/* Map Background */}
          <div className={styles.map_background}>
            <div className={styles.map_image}></div>
          </div>

          {/* City Weather Cards Overlaid on Map */}
          {cities.map((city) => (
            <div
              key={city.id}
              className={`${styles.city_card} ${
                selectedCity?.id === city.id ? styles.selected : ""
              }`}
              style={{
                left: `${city.x}%`,
                top: `${city.y}%`,
              }}
              onClick={() => handleCityClick(city)}
            >
              <div className={styles.city_weather}>
                <img src={city.icon} alt={city.weather} />
                <span className={styles.temperature}>
                  {convertTemperature(city.temperature)}
                  {getTemperatureUnit()}
                </span>
              </div>
              <div className={styles.city_name}>{city.name}</div>
              {selectedCity?.id === city.id && (
                <button className={styles.see_detail_btn}>See detail</button>
              )}
              <div className={styles.location_dot}></div>
            </div>
          ))}

          {/* Map Controls */}
          <div className={styles.map_controls}>
            <button className={styles.control_btn}>+</button>
            <button className={styles.control_btn}>-</button>
            <button className={styles.location_btn}>↑</button>
          </div>

          {/* Done Button */}
          <button className={styles.done_btn}>Done</button>
        </div>

        {/* City List Sidebar */}
        <div className={styles.city_list}>
          <h3>Weather in Cities</h3>
          {cities.map((city) => (
            <div
              key={city.id}
              className={`${styles.city_list_item} ${
                selectedCity?.id === city.id ? styles.selected : ""
              }`}
              onClick={() => handleCityCardClick(city)}
            >
              <img src={city.icon} alt={city.weather} />
              <div className={styles.city_info}>
                <span className={styles.city_name}>{city.name}</span>
                <span className={styles.city_time}>10:23</span>
              </div>
              <span className={styles.city_temp}>
                {convertTemperature(city.temperature)}
                {getTemperatureUnit()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;

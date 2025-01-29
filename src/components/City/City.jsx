import React, { useState } from "react";
import styles from "./City.module.css";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";
import { List } from "react-virtualized";

// Importing Weather Icons
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

const City = () => {
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
  };

  // Function to render each row in RecyclerView (left section)
  const rowRenderer = ({ key, index, style }) => {
    const weather = weatherList[index];

    return (
      <div
        key={key}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgb(32, 43, 59)",
          color: "white",
          borderRadius: "10px",
          padding: "10px",
          height: "80px",
          marginBottom: "20px",
        }}
        className={styles.cityWeather}
        onClick={() => setSelectedWeather(weather)}
      >
        <img src={weather.icon} alt="weather-icon" width="50" height="50" />
        <div className={styles.cityTime}>
          <p>{weather.location}</p>
          <p>{weather.time}</p>
        </div>
        <p>{weather.temperature}°C</p>
      </div>
    );
  };

  return (
    <div className={styles.city}>
      <Navigation />
      <div className={styles.left_section}>
        <SearchBar onSearch={search} />
        <div className={styles.recyclerView}>
          <List
            width={850}
            height={600}
            rowCount={weatherList.length}
            rowHeight={100}
            rowRenderer={rowRenderer}
            overscanRowCount={5}
          />
        </div>
      </div>

      {/* Right Section - Displays Selected Weather */}
      <div className={styles.right_section}>
        {selectedWeather ? (
          <>
            <div className={styles.current_city}>
              <div className={styles.city_temp_icon_container}>
                <div className={styles.city_temp}>
                  <p className={styles.location}>{selectedWeather.location}</p>
                  <p className={styles.rain}>
                    Chance of rain: {selectedWeather.rain}
                  </p>
                  <p className={styles.temperature}>
                    {selectedWeather.temperature}°C
                  </p>
                </div>
                <div className={styles.city_icon}>
                  <img
                    src={selectedWeather.icon}
                    alt="Weather Icon"
                    className={styles.weather_icon}
                  />
                </div>
              </div>
            </div>

            <hr className={styles.divider} />
            {/* Today's Forecast */}
            <div className={styles.today_forecast}>
              <p className={styles.today_forecast_title}>TODAY'S FORECAST</p>
              <div className={styles.today_container}>
                {["6:00 AM", "9:00 AM", "12:00 PM"].map((time, index, arr) => (
                  <React.Fragment key={index}>
                    <div className={styles.one}>
                      <p className={styles.clr}>{time}</p>
                      <img src={selectedWeather.icon} alt="Forecast Icon" />
                      <p>{selectedWeather.temperature - index}°C</p>
                    </div>
                    {/* Add Vertical Divider except for the last item */}
                    {index !== arr.length - 1 && (
                      <div className={styles.vertical_divider}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <hr className={styles.divider} />

            {/* 7-Day Forecast */}
            <div className={styles.seven_day_forecast}>
              <p className={styles.seven_forecast_title}>3-DAY FORECAST</p>
              <div className={styles.seven_day_container}>
                {["Today", "Tue", "Wed"].map((day, index, arr) => (
                  <React.Fragment key={index}>
                    <div className={styles.day_one}>
                      <p className={styles.clr}>{day}</p>
                      <img src={selectedWeather.icon} alt="Forecast Icon" />
                      <p>Sunny</p>
                      <p>36/22</p>
                    </div>

                    {index !== arr.length - 1 && (
                      <hr className={styles.divider} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p>Select a city to see details</p>
        )}
      </div>
    </div>
  );
};

export default City;

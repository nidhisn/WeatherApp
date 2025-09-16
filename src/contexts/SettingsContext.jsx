import React, { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

export const SettingsProvider = ({ children }) => {
  // Default settings
  const [settings, setSettings] = useState({
    temperature: "Celsius",
    windSpeed: "km/h",
    pressure: "hPa",
    precipitation: "Milimeters",
    distance: "Kilimeters",
    notifications: false,
    timeFormat: false,
    location: false,
  });

  // Update a specific setting
  const updateSetting = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Temperature conversion functions
  const convertTemperature = (tempInCelsius) => {
    if (settings.temperature === "Fahrenheit") {
      return Math.round((tempInCelsius * 9) / 5 + 32);
    }
    return Math.round(tempInCelsius);
  };

  const getTemperatureUnit = () => {
    return settings.temperature === "Fahrenheit" ? "°F" : "°C";
  };

  // Wind speed conversion functions
  const convertWindSpeed = (speedInMs) => {
    switch (settings.windSpeed) {
      case "km/h":
        return Math.round(speedInMs * 3.6);
      case "Knots":
        return Math.round(speedInMs * 1.944);
      case "m/s":
      default:
        return Math.round(speedInMs);
    }
  };

  const getWindSpeedUnit = () => {
    switch (settings.windSpeed) {
      case "km/h":
        return "km/h";
      case "Knots":
        return "knots";
      case "m/s":
      default:
        return "m/s";
    }
  };

  // Pressure conversion functions
  const convertPressure = (pressureInHPa) => {
    switch (settings.pressure) {
      case "Inches":
        return Math.round(pressureInHPa * 0.02953);
      case "kPa":
        return Math.round(pressureInHPa * 0.1);
      case "mm":
        return Math.round(pressureInHPa * 0.750062);
      case "hPa":
      default:
        return Math.round(pressureInHPa);
    }
  };

  const getPressureUnit = () => {
    switch (settings.pressure) {
      case "Inches":
        return "inHg";
      case "kPa":
        return "kPa";
      case "mm":
        return "mmHg";
      case "hPa":
      default:
        return "hPa";
    }
  };

  // Distance conversion functions
  const convertDistance = (distanceInKm) => {
    if (settings.distance === "Miles") {
      return Math.round(distanceInKm * 0.621371);
    }
    return Math.round(distanceInKm);
  };

  const getDistanceUnit = () => {
    return settings.distance === "Miles" ? "miles" : "km";
  };

  // Precipitation conversion functions
  const convertPrecipitation = (precipitationInMm) => {
    if (settings.precipitation === "Inches") {
      return (precipitationInMm * 0.0393701).toFixed(2);
    }
    return precipitationInMm.toFixed(1);
  };

  const getPrecipitationUnit = () => {
    return settings.precipitation === "Inches" ? "in" : "mm";
  };

  // Time format functions
  const formatTime = (date) => {
    if (settings.timeFormat) {
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    }
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const value = {
    settings,
    updateSetting,
    convertTemperature,
    getTemperatureUnit,
    convertWindSpeed,
    getWindSpeedUnit,
    convertPressure,
    getPressureUnit,
    convertDistance,
    getDistanceUnit,
    convertPrecipitation,
    getPrecipitationUnit,
    formatTime,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

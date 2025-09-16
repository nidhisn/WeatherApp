import React from "react";
import styles from "./Settings.module.css";
import Navigation from "../Navigation/Navigation";
import Switch from "@mui/material/Switch";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useSettings } from "../../contexts/SettingsContext";

const Settings = () => {
  const { settings, updateSetting } = useSettings();

  // Handling ToggleButtonGroup value change
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      updateSetting("temperature", newAlignment);
    }
  };

  // Handling Switch state change
  const handleNotificationChange = (event) => {
    updateSetting("notifications", event.target.checked);
  };

  const handleTimeFormatChange = (event) => {
    updateSetting("timeFormat", event.target.checked);
  };

  const handleLocationChange = (event) => {
    updateSetting("location", event.target.checked);
  };

  return (
    <div className={styles.settings}>
      <Navigation />
      <div className={styles.left_section}>
        <div className={styles.units_container}>
          <div className={styles.settings_data}>
            <p>TEMPERATURE</p>
            <ToggleButtonGroup
              className={styles.toggle_button_group}
              value={settings.temperature}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton
                sx={{
                  flex: 1,
                  backgroundColor: "rgb(11, 19, 30)",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "rgb(32, 43, 59)",
                    color: "white",
                  },
                  borderRadius: "12px",
                  border: "1px solid rgb(53, 69, 94)",
                }}
                value="Celsius"
                aria-label="Celsius"
              >
                °C
              </ToggleButton>
              <ToggleButton
                sx={{
                  flex: 1,
                  backgroundColor: "rgb(11, 19, 30)",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "rgb(32, 43, 59)",
                    color: "white",
                  },
                  borderRadius: "12px",
                  border: "1px solid rgb(53, 69, 94)",
                }}
                value="Fahrenheit"
                aria-label="Fahrenheit"
              >
                °F
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className={styles.settings_data}>
            <p>WIND SPEED</p>
            <ToggleButtonGroup
              className={styles.toggle_button_group}
              value={settings.windSpeed}
              exclusive
              onChange={(e, newValue) => updateSetting("windSpeed", newValue)}
              aria-label="wind speed"
            >
              <ToggleButton
                sx={{
                  flex: 1,
                  backgroundColor: "rgb(11, 19, 30)",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "rgb(32, 43, 59)",
                    color: "white",
                  },
                  borderRadius: "12px",
                  border: "1px solid rgb(53, 69, 94)",
                }}
                value="km/h"
                aria-label="km/h"
              >
                km/h
              </ToggleButton>
              <ToggleButton
                sx={{
                  flex: 1,
                  backgroundColor: "rgb(11, 19, 30)",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "rgb(32, 43, 59)",
                    color: "white",
                  },
                  borderRadius: "12px",
                  border: "1px solid rgb(53, 69, 94)",
                }}
                value="m/s"
                aria-label="m/s"
              >
                m/s
              </ToggleButton>
              <ToggleButton
                sx={{
                  flex: 1,
                  backgroundColor: "rgb(11, 19, 30)",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "rgb(32, 43, 59)",
                    color: "white",
                  },
                  borderRadius: "12px",
                  border: "1px solid rgb(53, 69, 94)",
                }}
                value="Knots"
                aria-label="Knots"
              >
                Knots
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className={styles.settings_data}>
            <p>PRESSURE</p>
            <ToggleButtonGroup
              className={styles.toggle_button_group}
              value={settings.pressure}
              exclusive
              onChange={(e, newValue) => updateSetting("pressure", newValue)}
              aria-label="pressure"
            >
              <ToggleButton
                sx={{
                  flex: 1,
                  backgroundColor: "rgb(11, 19, 30)",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "rgb(32, 43, 59)",
                    color: "white",
                  },
                  borderRadius: "12px",
                  border: "1px solid rgb(53, 69, 94)",
                }}
                value="hPa"
                aria-label="hPa"
              >
                hPa
              </ToggleButton>
              <ToggleButton
                sx={{
                  flex: 1,
                  backgroundColor: "rgb(11, 19, 30)",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "rgb(32, 43, 59)",
                    color: "white",
                  },
                  borderRadius: "12px",
                  border: "1px solid rgb(53, 69, 94)",
                }}
                value="Inches"
                aria-label="Inches"
              >
                Inches
              </ToggleButton>
              <ToggleButton
                sx={{
                  flex: 1,
                  backgroundColor: "rgb(11, 19, 30)",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "rgb(32, 43, 59)",
                    color: "white",
                  },
                  borderRadius: "12px",
                  border: "1px solid rgb(53, 69, 94)",
                }}
                value="kPa"
                aria-label="kPa"
              >
                kPa
              </ToggleButton>
              <ToggleButton
                sx={{
                  flex: 1,
                  backgroundColor: "rgb(11, 19, 30)",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "rgb(32, 43, 59)",
                    color: "white",
                  },
                  borderRadius: "12px",
                  border: "1px solid rgb(53, 69, 94)",
                }}
                value="mm"
                aria-label="mm"
              >
                mm
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className={styles.settings_data}>
            <p>PRECIPITATION</p>
            <ToggleButtonGroup
              className={styles.toggle_button_group}
              value={settings.precipitation}
              exclusive
              onChange={(e, newValue) =>
                updateSetting("precipitation", newValue)
              }
              aria-label="precipitation"
            >
              <ToggleButton
                sx={{
                  flex: 1,
                  backgroundColor: "rgb(11, 19, 30)",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "rgb(32, 43, 59)",
                    color: "white",
                  },
                  borderRadius: "12px",
                  border: "1px solid rgb(53, 69, 94)",
                }}
                value="Milimeters"
                aria-label="Milimeters"
              >
                mm
              </ToggleButton>
              <ToggleButton
                sx={{
                  flex: 1,
                  backgroundColor: "rgb(11, 19, 30)",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "rgb(32, 43, 59)",
                    color: "white",
                  },
                  borderRadius: "12px",
                  border: "1px solid rgb(53, 69, 94)",
                }}
                value="Inches"
                aria-label="Inches"
              >
                Inches
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className={styles.settings_data}>
            <p>DISTANCE</p>
            <ToggleButtonGroup
              className={styles.toggle_button_group}
              value={settings.distance}
              exclusive
              onChange={(e, newValue) => updateSetting("distance", newValue)}
              aria-label="distance"
            >
              <ToggleButton
                sx={{
                  flex: 1,
                  backgroundColor: "rgb(11, 19, 30)",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "rgb(32, 43, 59)",
                    color: "white",
                  },
                  borderRadius: "12px",
                  border: "1px solid rgb(53, 69, 94)",
                }}
                value="Kilimeters"
                aria-label="Kilimeters"
              >
                km
              </ToggleButton>
              <ToggleButton
                sx={{
                  flex: 1,
                  backgroundColor: "rgb(11, 19, 30)",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "rgb(32, 43, 59)",
                    color: "white",
                  },
                  borderRadius: "12px",
                  border: "1px solid rgb(53, 69, 94)",
                }}
                value="Miles"
                aria-label="Miles"
              >
                Miles
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>

        <div className={styles.notification_container}>
          <p>Notifications</p>
          <div className={styles.notification}>
            <p>Be aware of the weather</p>
            <Switch
              checked={settings.notifications}
              onChange={handleNotificationChange}
            />
          </div>
        </div>

        <div className={styles.general_container}>
          <p>General</p>
          <div className={styles.time}>
            <p>12-Hour Time</p>
            <Switch
              checked={settings.timeFormat}
              onChange={handleTimeFormatChange}
            />
          </div>

          <p>Location</p>
          <div className={styles.location}>
            <p>Get weather of your location</p>
            <Switch
              checked={settings.location}
              onChange={handleLocationChange}
            />
          </div>
        </div>
      </div>

      <div className={styles.right_section}>
        <div className={styles.sign_up}>
          <h5>Never forget your umbrella!</h5>
          <p>
            Sign up for our daily weather newsletter personalized just for you
          </p>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

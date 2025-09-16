import React, { useState } from "react";
import styles from "./Settings.module.css";
import Navigation from "../Navigation/Navigation";
import Switch from "@mui/material/Switch";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Settings = () => {
  // State to handle ToggleButtonGroup values
  const [alignment, setAlignment] = useState("Celsius");
  const [windSpeed, setWindSpeed] = useState("km/h");
  const [pressure, setPressure] = useState("hPa");
  const [precipitation, setPrecipitation] = useState("Milimeters");
  const [distance, setDistance] = useState("Kilimeters");

  // Separate state for each Switch
  const [notifications, setNotifications] = useState(false);
  const [timeFormat, setTimeFormat] = useState(false);
  const [location, setLocation] = useState(false);

  // Handling ToggleButtonGroup value change
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  // Handling Switch state change
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles.settings}>
      <Navigation />
      <div className={styles.left_section}>
        <div classNames={styles.units_container}>
          <div className={styles.settings_data}>
            <p>TEMPERATURE</p>
            <ToggleButtonGroup
              className={styles.toggle_button_group}
              value={alignment}
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
              value={windSpeed}
              exclusive
              onChange={(e, newValue) => setWindSpeed(newValue)}
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
              value={pressure}
              exclusive
              onChange={(e, newValue) => setPressure(newValue)}
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
              value={precipitation}
              exclusive
              onChange={(e, newValue) => setPrecipitation(newValue)}
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
              value={distance}
              exclusive
              onChange={(e, newValue) => setDistance(newValue)}
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
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
          </div>
        </div>

        <div className={styles.general_container}>
          <p>General</p>
          <div className={styles.time}>
            <p>12-Hour Time</p>
            <Switch
              checked={timeFormat}
              onChange={(e) => setTimeFormat(e.target.checked)}
            />
          </div>

          <p>Location</p>
          <div className={styles.location}>
            <p>Get weather of your location</p>
            <Switch
              checked={location}
              onChange={(e) => setLocation(e.target.checked)}
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

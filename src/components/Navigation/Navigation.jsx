import styles from "./Navigation.module.css";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleCitiesClick = () => {
    navigate("/city");
  };
  const handleMapClick = () => {
    navigate("/map");
  };
  const handleWeatherClick = () => {
    navigate("/weather");
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        <li onClick={handleHomeClick}>
          <img src="/cloudd.png" alt="Cloud" />
          <span>Home</span>
        </li>
        <li onClick={handleWeatherClick}>
          <img src="/rain.png" alt="Rain" />
          <span>Weather</span>
        </li>
        <li onClick={handleCitiesClick}>
          <img src="/list.png" alt="Cities" />
          <span>Cities</span>
        </li>
        <li onClick={handleMapClick}>
          <img src="/map.png" alt="Map" />
          <span>Map</span>
        </li>
        <li onClick={handleSettingsClick}>
          <img src="/settings.png" alt="Settings" />
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import styles from './Navigation.module.css';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
   const navigate = useNavigate();
      
          const handleHomeClick = ()=>{
              navigate('/')
          }

          const handleCitiesClick = ()=>{
                    navigate('/city')
                }
          const handleMapClick = ()=>{
                  navigate('/map')
              }
          const handleSettingsClick = ()=>{
                navigate('/settings')
            }

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <img src="src/assets/cloudd.png" alt="Cloud" onClick={handleHomeClick}/>
        </li>
        <li>
          <img src="src/assets/rain.png" alt="Rain" />
          <span>Weather</span>
        </li>
        <li onClick={handleCitiesClick}>
          <img src="src/assets/list.png" alt="Cities" />
          <span>Cities</span>
        </li>
        <li onClick={handleMapClick}>
          <img src="src/assets/map.png" alt="Map" />
          <span>Map</span>
        </li>
        <li onClick={handleSettingsClick}>
          <img src="src/assets/settings.png" alt="Settings" />
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

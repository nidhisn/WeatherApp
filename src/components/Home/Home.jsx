import React from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleButtonClick = ()=>{
        navigate('/weather')
    }
  return (
    <div className={`${styles.home_section}` }>
        <div className={`${styles.left_section}`}>

            <img className={`${styles.bigCloud}`} src="src/assets/cloudcartoon.png" alt="" />

        </div>
        <div className={`${styles.right_section}`}>
                <img className={`${styles.smallCloud}`} src="src/assets/cloudd.png" alt="" />
                <h1>Drizzle</h1>
                <p>Weather App</p>
                <button onClick={handleButtonClick}>Get started</button>
        </div>
        
    </div>
  )
}

export default Home
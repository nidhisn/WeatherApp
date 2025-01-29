import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'; 
import Weather from './components/Weather/Weather'; 
import City from './components/City/City';
{/*import Map from './components/Map/Map';
import Settings from './components/Settings/Settings';
*/}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/weather" element={<Weather />} /> 
        <Route path="/city" element={<City />} /> 
       {/* <Route path="/map" element={<Map />} />
        <Route path="/settings" element={<Settings />} />  */}
      </Routes>
    </Router>
  );
}

export default App;

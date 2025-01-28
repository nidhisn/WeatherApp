import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'; 
import Weather from './components/Weather/Weather'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/weather" element={<Weather />} /> 
      </Routes>
    </Router>
  );
}

export default App;

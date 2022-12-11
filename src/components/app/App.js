import React from "react";
import './app.scss';
import MainWeather from "../mainWeather/MainWeather";
import MapWeather from "../mapWeather/MapWeather";
import AppThreats from "../appThreats/AppThreats";
import AppAnalysis from "../appAnalysis/AppAnalysis";
import './app.scss'

import {Route, Routes} from "react-router-dom";


function App() {

  return (
    <div className="app">
        <Routes>
            <Route path="/" element={<MainWeather/>}/>
            <Route path="/mapWeather" element={<MapWeather/>}/>
            <Route path="/appThreats" element={<AppThreats/>}/>
            <Route path="/appAnalysis" element={<AppAnalysis/>}/>
        </Routes>
    </div>
  );
}

export default App;

import './appAnalysis.scss'
import AppHeader from "../appHeader/AppHeader";
import WeatherChart from "../weatherСhart/WeatherChart";

function AppAnalysis(props) {
    return (
        <div className="appAnalysis">
            <AppHeader/>
            <WeatherChart/>
        </div>
    );
}

export default AppAnalysis;
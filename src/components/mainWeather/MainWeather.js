import "./mainWeather.scss"
import AppHeader from "../appHeader/AppHeader";
import AppCardsIndi from "../appCardsIndi/AppCardsIndi";
import CardWeather from "../cardWeather/CardWeather";

function MainWeather(props) {

    return (
        <div className="mainWeather">
            <AppHeader/>
            <AppCardsIndi/>
            <CardWeather/>
        </div>
    );
}

export default MainWeather;
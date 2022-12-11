import './mapWheather.scss'
import AppHeader from "../appHeader/AppHeader";
import AppCardsIndi from "../appCardsIndi/AppCardsIndi";
import AppMap from "../appMap/AppMap";
import SimpleMap from "../appMap/AppMap";


function MapWeather(props) {
    return (
        <div className='mapWeather'>
            <AppHeader/>
            <AppCardsIndi/>
            <SimpleMap/>

        </div>
    );
}

export default MapWeather;
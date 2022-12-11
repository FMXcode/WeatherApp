import './appCardsIndi.scss'
import AppIndicator from "../appIndicator/AppIndicator";
import icon from '../../resource/iconCards.png'
import iconRed from '../../resource/ICONRED.png'
import iconStorm from '../../resource/png-transparent-rain-and-snow-mixed-computer-icons-weather-bbc-weather-icons-text-cloud-heart.png'
function AppCardsIndi(props) {
    return (
        <div className='appCardsIndi'>
            <AppIndicator icon={icon}/>
            <AppIndicator icon={iconRed}/>
            <AppIndicator icon={iconStorm}/>
            <AppIndicator/>
        </div>
    );
}

export default AppCardsIndi;
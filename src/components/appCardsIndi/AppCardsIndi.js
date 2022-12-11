import './appCardsIndi.scss'
import AppIndicator from "../appIndicator/AppIndicator";
import icon from '../../resource/iconCards.png'
import iconRed from '../../resource/ICONRED.png'
import iconRain from '../../resource/images (1).png'
import iconSnow from '../../resource/Без названия.png'

function AppCardsIndi(props) {
    const dataCards = [{threat: 'Ветер', characteristic: Math.floor(Math.random() * 100) + 1, value: Math.floor(Math.random() * 100) + 1, Flag: 'True'},
        {threat: 'Гроза', characteristic: Math.floor(Math.random() * 100) + 1, value: Math.floor(Math.random() * 100) + 1, Flag: 'True'},
        {threat: 'Дождь', characteristic: Math.floor(Math.random() * 100) + 1, value: Math.floor(Math.random() * 100) + 1, Flag: 'False'},
        {threat: 'Снег', characteristic: Math.floor(Math.random() * 100) + 1, value: Math.floor(Math.random() * 100) + 1, Flag: 'True'}]
    return (
        <div className='appCardsIndi'>
            <AppIndicator icon={icon} data={dataCards[0]}/>
            <AppIndicator icon={iconRed} data={dataCards[1]}/>
            <AppIndicator icon={iconRain} data={dataCards[2]}/>
            <AppIndicator icon={iconSnow} data={dataCards[3]}/>
        </div>
    );
}

export default AppCardsIndi;
import './appHeader.scss'
import logo from '../../resource/logo.png'
import {Link} from "react-router-dom";

function AppHeader() {
    return (
        <div className='appHeader'>
            <ul className="appMenuItem">
                <img className="headerLogo" src={logo} alt="icon"/>
                <li>
                    <Link to="/" className='linkPage'>Прогноз на день</Link>
                </li>
                <li>
                    <Link to="/mapWeather" className='linkPage'>Карта осадков</Link>
                </li>
                <li>
                    <Link to="/appThreats" className='linkPage'>Угрозы</Link>
                </li>
                <li>
                    <Link to="/appAnalysis" className='linkPage'>Анализ</Link>
                </li>
            </ul>
            <ul className='appMenuInfo'>
                <li><a href="">Обновить данные</a></li>
                <li><a href="">Дополнительно</a></li>
            </ul>
        </div>
    );
}

export default AppHeader;

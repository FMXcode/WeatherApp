import './appIndicator.scss'
function AppIndicator({icon, data}) {
    let indicator = '';
    let attention = 'appIndicator';
    if(data.characteristic > 50){
        indicator = 'temperature redValue'
        attention = 'appIndicator indAttention'
    }else {
        indicator = 'temperature greenValue'
    }

    return (
        <div className={attention}>
            <img src={icon} alt="weather"/>

            <ul>
                <li>
                    <h5>{data.threat}</h5>
                </li>
                <li>
                    {data.characteristic}
                </li>
                <li className={indicator}>
                    {data.value}%
                </li>
            </ul>
        </div>
    );
}

export default AppIndicator;
import './appThreatsIndicator.scss'

function AppThreatsIndicator({data}) {
    let classThreat = 'appThreatsIndicator blueindi pulseBlue'
    if(data.Flag === 'True'){
        classThreat = 'appThreatsIndicator redindi pulseRed'
    }
    return (
        <div className={classThreat}>
            <p>{data.threat}</p>
            <h3>{data.value}</h3>
            <p>{data.characteristic}</p>
        </div>
    );
}

export default AppThreatsIndicator;
import './cardWeather.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon from '../../resource/images (1).png'
import iconRed from '../../resource/ICONRED.png'
import iconSnow from '../../resource/Без названия.png'

function CardWeather(props) {
    return (
        <div className='cardWeather'>
            <Container>
                <Row>
                    <Col><h1>9</h1></Col>
                    <Col><p>декабря
                        сегодня</p>
                    </Col>
                    <Col xs={3}><p>Индикатор погоды</p></Col>
                    <Col>
                        <p>Давление,
                            мм рт. ст.</p></Col>
                    <Col><p>Влажность</p></Col>
                    <Col><p>Ветер, м/с</p></Col>
                    <Col><p>Ощущается как</p></Col>
                </Row>
                <hr/>
                <Row>
                    <Col><h1></h1></Col>
                    <Col>
                        <p>Утром</p>
                        <h6>−2…−1</h6>
                    </Col>
                    <Col xs={3} className='indicator'>
                        <Row>
                            <Col><img src={icon} alt=""/></Col>
                            <Col><h6>Дождь со снегом</h6></Col>
                        </Row>
                    </Col>
                    <Col><h5>754</h5></Col>
                    <Col><h5>90%</h5></Col>
                    <Col><h5>
                        4,3
                    </h5></Col>
                    <Col><h5>-7</h5></Col>
                </Row>
                <Row>
                    <Col><h1></h1></Col>
                    <Col>
                        <p>Днём</p>
                        <h6>−10</h6>
                    </Col>
                    <Col xs={3} className='indicator'>
                        <Row>
                            <Col><img src={iconRed} alt=""/></Col>
                            <Col><h6>Гроза</h6></Col>
                        </Row>
                    </Col>
                    <Col><h5>756</h5></Col>
                    <Col><h5>93%</h5></Col>
                    <Col><h5 className='red'>
                        7,3
                    </h5></Col>
                    <Col><h5 className='blue'>-16</h5></Col>
                </Row>
                <Row>
                    <Col><h1></h1></Col>
                    <Col>
                        <p>Вечером</p>
                        <h6>1</h6>
                    </Col>
                    <Col xs={3} className='indicator'>
                        <Row>
                            <Col><img src={iconSnow} alt=""/></Col>
                            <Col><h6>Снег</h6></Col>
                        </Row>
                    </Col>
                    <Col><h5>752</h5></Col>
                    <Col><h5>97%</h5></Col>
                    <Col><h5>
                        3
                    </h5></Col>
                    <Col><h5>-2</h5></Col>
                </Row>
                <Row>
                    <Col><h1></h1></Col>
                    <Col>
                        <p>Ночью</p>
                        <h6>−4…−2</h6>
                    </Col>
                    <Col xs={3} className='indicator'>
                        <Row>
                            <Col><img src={iconSnow} alt=""/></Col>
                            <Col><h6>Снег</h6></Col>
                        </Row>
                    </Col>
                    <Col><h5>752</h5></Col>
                    <Col><h5>97%</h5></Col>
                    <Col><h5>
                        3
                    </h5></Col>
                    <Col><h5>-2</h5></Col>
                </Row>
                <hr/>


            </Container>
        </div>
    );
}

export default CardWeather;
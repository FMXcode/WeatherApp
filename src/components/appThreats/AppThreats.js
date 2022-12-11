import './appThreats.scss'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AppHeader from "../appHeader/AppHeader";
import AppThreatsIndicator from "../appThreatsIndicator/AppThreatsIndicator";

function AppThreats(props) {
    const dataThreats = [{threat: 'шквал', characteristic: 'Скорость ветра', value: 'до 25 м/с', Flag: 'True'},
                        {threat: 'град', characteristic: 'Диаметр частиц', value: 'от 5 до 50', Flag: 'True'},
                        {threat: 'туман', characteristic: 'Вид', value: 'Сплошной', Flag: 'False'},
                        {threat: 'гололед', characteristic: 'Вид', value: 'крупа', Flag: 'True'}]
    return (
        <div className="appThreats">
            <AppHeader/>
            <Container className='ConThreat'>
                <Row>
                    <Col>
                        <AppThreatsIndicator data={dataThreats[0]}/>
                    </Col>
                    <Col>
                        <AppThreatsIndicator data={dataThreats[1]}/>
                    </Col>
                    <Col>
                        <AppThreatsIndicator data={dataThreats[2]}/>
                    </Col>
                    <Col>
                        <AppThreatsIndicator data={dataThreats[3]}/>
                    </Col>
                </Row>
            </Container>
            <hr/>
            <Container >
                <Row>
                    <Col>
                       <h6>Температура</h6>
                    </Col>
                    <Col>
                        <h6>
                            Ветер, м/с</h6>
                    </Col>
                    <Col>
                        <h6>Давление,
                            мм рт. ст.</h6>
                    </Col>
                    <Col>
                        <h6>Дальность видимости, м</h6>
                    </Col>
                    <Col>
                        <h6>атмосферные явления</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>-10°</p>
                    </Col>
                    <Col>
                        <p className='excess'>
                            26</p>
                    </Col>
                    <Col>
                        <p>761</p>
                    </Col>
                    <Col>
                        <p>250</p>
                    </Col>
                    <Col>
                        <p>шквал</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>-7°</p>
                    </Col>
                    <Col>
                        <p>
                            17</p>
                    </Col>
                    <Col>
                        <p>762</p>
                    </Col>
                    <Col>
                        <p className='excess'>120</p>
                    </Col>
                    <Col>
                        <p>град</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>-1°</p>
                    </Col>
                    <Col>
                        <p>
                            4</p>
                    </Col>
                    <Col>
                        <p>765</p>
                    </Col>
                    <Col>
                        <p className='normal'>350</p>
                    </Col>
                    <Col>
                        <p>туман</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='excess'>-20°</p>
                    </Col>
                    <Col>
                        <p>
                            4</p>
                    </Col>
                    <Col>
                        <p>765</p>
                    </Col>
                    <Col>
                        <p>500</p>
                    </Col>
                    <Col>
                        <p>гололед</p>
                    </Col>
                </Row>
            </Container>
            <hr/>
        </div>
    );
}

export default AppThreats;
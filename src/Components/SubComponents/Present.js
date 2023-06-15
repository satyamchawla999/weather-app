import {Row,Col,Card,Input } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import '../../Assets/Styles/present.css'
import { useContext } from 'react';
import { LocationContext,SetLocationContext } from '../Main';

const Present = ()=>{

    const data = useContext(LocationContext);
    const handleSubmit = useContext(SetLocationContext)

    let name,celsius,description,wind,pressure,humidity;

    if(data === undefined) {
        name = "Mohali";
        celsius = "36";
        description = "Clear Sky";
        wind = "4.51";
        pressure = "998";
        humidity = "27"
    } else {
         name = data.name;
       
     celsius = Math.round(data.main.temp - 273.15);
     description = (data.weather[0].description);
     wind = data.wind.speed;
     pressure = data.main.pressure;
     humidity = data.main.humidity;
    }
    

    return(
        <>
            <Row className='row'>
                <Col className="col" span={12}>
                    {name}
                </Col>
                <Col span={2}></Col>
                <Col className="col" span={10}>
                    <Input onPressEnter={(value)=>handleSubmit(value.target.value)} className="input" size="large" placeholder="Search Location" prefix={<SearchOutlined />} />
                </Col>
            </Row>

            <Row>
                <Col span={8}>
                    <Card 
                        className='card' 
                        style={{fontWeight:"bolder"}}
                        cover={<img alt="example" src={require('../../Assets/Images/PartlyCloudy.png')} height={180}/>}
                    >
                        {description}
                    </Card>
                </Col>

                <Col span={8} >
                    <Card className='card middle' >
                        {celsius} °c
                    </Card>
                </Col>

                <Col span={8}>
                    <Card className='card last' >
                        Wind: {wind} kmph
                        Humidity: {humidity} mm
                        Pressure: {pressure} mb
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Present;
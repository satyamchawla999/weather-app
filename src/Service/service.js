import axios from "axios";


const getWeather =  (lon,lat)=>(axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=a6720265fb7c6bc8c4f3afa18dc26ece`));



export default getWeather;

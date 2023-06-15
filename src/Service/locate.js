import axios from "axios";

const getLocation = (name)=>(axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=a6720265fb7c6bc8c4f3afa18dc26ece`));

export default getLocation;

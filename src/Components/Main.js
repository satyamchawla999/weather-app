import WeatherContainer from "./WeatherContainer"
import { useState,useEffect,createContext } from "react";
import getWeather from '../Service/service';
import getLocation from '../Service/locate';

const LocationContext = createContext();
const SetLocationContext = createContext();

const Main = ()=>{

  const [data,setData] = useState({});
  const [location,setLocation] = useState("Mohali");

  useEffect(()=>{
    console.log(location)
    const weather = async () => {

      const locate = await getLocation(location);

      const lon = locate.data[0].lon;
      const lat = locate.data[0].lat;
      
      const response = await getWeather(lon,lat);
      setData(response);
    }

    weather();
  },[location]);

  const handleSubmit = (value) =>{
    setLocation(value)
  }


  return(
    <>
      <LocationContext.Provider value={data.data}>
        <SetLocationContext.Provider value={handleSubmit}>
          <WeatherContainer/>
        </SetLocationContext.Provider>                
      </LocationContext.Provider>
    </>
  )
}

export {LocationContext,SetLocationContext};

export default Main;


















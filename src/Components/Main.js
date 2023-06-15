import WeatherContainer from "./WeatherContainer"
import { useState,useEffect,createContext } from "react";
import getWeather from '../Service/service';
import getLocation from '../Service/locate';
import data1 from '../Data/W.json'

import {SearchOutlined} from '@ant-design/icons';
import {Input } from 'antd';



const LocationContext = createContext();

const Main = ()=>{

  const [data,setData] = useState({});
  const [location,setLocation] = useState("Rajpura");
  const [locationSearch,setLocationSearch] = useState("Mohali");

  useEffect(()=>{
    console.log(location)
    const weather = async () => {

      const locate = await getLocation(locationSearch);

      const lon = locate.data[0].lon;
      const lat = locate.data[0].lat;
      
      const response = await getWeather(lon,lat);
      setData(response);
    }

    weather();
  },[locationSearch]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setLocationSearch(location)
  }


  return(
    <>
      <LocationContext.Provider value={data.data}>
        <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setLocation(e.target.value)}/>

        </form>
      {/* <Input onChange={(value)=>setLocation(value)} className="input" size="large" placeholder="Search Location" prefix={<SearchOutlined />} /> */}
        
          <WeatherContainer/>
        
      </LocationContext.Provider>
    </>
  )
}

export {LocationContext};

export default Main;





























// import { useState,useEffect } from "react";
// import getUser from '../Service/service'
// import {Layout} from 'antd'

// import '../Assets/main.css'

// const Main = ()=>{

//     const [data,setData] = useState([]);
//     useEffect(()=>{
//         getUser().then((res)=>(setData(res.data.data)))
//     },[]);

//     return (
//       <div className="main">
        
//       </div>
//     );
// }
  
// export default Main;
  
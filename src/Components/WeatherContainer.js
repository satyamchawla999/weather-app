import { createContext } from "react";
import {Present,Future} from "./SubComponents"
import {Layout} from "antd";
import Data from '../Data/Mock.json'
import "../Assets/Styles/weatherContainer.css"

const DataContext = createContext();
const data = Data.weather

const WeatherContainer = ()=>{

  const {Content} = Layout;

  return (
    <>
      <Layout className="backGround">
        <Content className="weatherContent">
          <DataContext.Provider value={data}>
            <Present/>
            <Future/>
          </DataContext.Provider>
        </Content>
      </Layout>
    </>
  );
}

export {DataContext};
  
export default WeatherContainer;
  
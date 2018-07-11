import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constans/weathers';
import './styles.css';


const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
};

const WeatherLocation = () => (  
  <div className='weatherLocationCont'>
    <Location city={'Peru Lima!'}/>
    <WeatherData data ={ data }/>
  </div>
);

export default WeatherLocation;
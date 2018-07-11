import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { CLOUDY } from './../../../constans/weathers';
import './styles.css';


const WeatherData = () =>(
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={20} weatherState={CLOUDY}/>
        <WeatherExtraInfo humidity={80} wind={'10ms/s'}/>
    </div>
);

export default WeatherData;

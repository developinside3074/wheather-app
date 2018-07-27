import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD,
        CLOUDY,
        SUN,
        RAIN,
        SNOW,
        WINDY,
        THUNDER,
        DRIZZLE } from './../../../constans/weathers';
        import './styles.css';


const stateToIconName = weatherState =>{
    switch (weatherState) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";    
        case SUN:
            return "day-sunny";    
        case RAIN:
            return "rein";    
        case SNOW:
            return "sow";
        case WINDY:
            return "windy"; 
        case THUNDER:
            return "day-thunderstorm";
        case DRIZZLE:
            return "day-showers";           
        default:
            return "day-sunny";           
    }
};

const getWeatherIcon = weatherState => {   
        return (<WeatherIcons className='wicon' name = {stateToIconName(weatherState)} size="4x"/>);      
};

const WheatherTemperature = ({ temperature, weatherState }) =>(
      
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}       
        <span className='temperature' >{` ${temperature}`}</span>
        <span className='temperatureType'>C°</span>
    </div>
);

WheatherTemperature.propTypes = {
    temperature : PropTypes.number,
    weatherState : PropTypes.string,
};

export default WheatherTemperature;
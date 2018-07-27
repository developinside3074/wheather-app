import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () =>(
    <div>
        <WeatherLocation city={'Lima'} />
        <WeatherLocation city={'Bogota'} />
        <WeatherLocation city={'Santiago'} />
    </div>
);

export default LocationList;
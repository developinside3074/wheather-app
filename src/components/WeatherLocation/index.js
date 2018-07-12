import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN,} from './../../constans/weathers';import './styles.css';

const location = 'Lima';
const api_key = '6380b390a14962f2ba05dac68754f518';
const api_weateher = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

const data1 = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
};


class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: 'Buenos Aires!',
      data: data1,
    }
  }

  handleUpdateClick = () => {
    fetch(api_weateher);
    /*this.setState({     
      data: data2,
    });*/

  };

  render = () => {

    const { city, data } = this.state;
    return (
      <div className='weatherLocationCont'>
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick} >Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
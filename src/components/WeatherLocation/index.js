import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';


const location = 'Lima';
const api_key = '6380b390a14962f2ba05dac68754f518';
const api_weateher = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: 'Buenos Aires!',
      data: null,
    }
  }



  handleUpdateClick = () => {    
    fetch(api_weateher).then(data =>{
      console.log(data);
      return data.json();
    }).then(weather_data =>{           
      const data = transformWeather(weather_data);
      this.setState({ data });     
    });
    console.log("actualizado");
  }

  componentWillMount = () => {
    this.handleUpdateClick();
  }  

  render = () => {
    const { city, data } = this.state;
    return (
      <div className='weatherLocationCont'>
        <Location city={city} />
        {data ? <WeatherData data={data} /> : 'Cargando...'}
      </div>
    );
  }
}

export default WeatherLocation;
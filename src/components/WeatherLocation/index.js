import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import CircularProgress from 'material-ui/CircularProgress';



const api_key = "6380b390a14962f2ba05dac68754f518";
const url = "https://api.openweathermap.org/data/2.5/weather";


class WeatherLocation extends Component {

  constructor({ city }) {
    super();
    this.state = {
      city,
      data: null,
    }
  }

  handleUpdateClick = () => {
    const { city } = this.state;
    const api_weateher = `${url}?q=${city}&appid=${api_key}`;
    fetch(api_weateher).then(data =>{     
      return data.json();
    }).then(weather_data =>{           
      const data = transformWeather(weather_data);
      this.setState({ data });     
    });
   
  }

  componentWillMount = () => {
    this.handleUpdateClick();
  }  

  render = () => {

    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    return (
      <div className='weatherLocationCont' onClick={onWeatherLocationClick} >
        <Location city={city} />
        {data ? <WeatherData data={data} /> : 
         <CircularProgress size={60} thickness= {7}/>}
      </div>
      //<CircularProgress size={60} thickness= {7}
    );
  };
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;
import React from 'react';
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation';



const strComponent = cities =>(
    cities.map(city => (<WeatherLocation key={city} city={city} />))
);

const LocationList = ({ cities }) =>(
    <div>
        {strComponent(cities)}
    </div>
);


LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}
export default LocationList;
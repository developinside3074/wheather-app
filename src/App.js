import React, { Component } from 'react';
import LocationLocationList from './components/LocationList';
import './App.css';

const cities = [
  'Lima',
  'Bogota',
  'Santiago',
  'Caracas',
  'Madrid'
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationLocationList cities={cities}></LocationLocationList>
      </div>
    );
  }
}

export default App;

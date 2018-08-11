import React, { Component } from 'react';
import LocationList from './components/LocationList';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

const cities = [
  'Lima',
  'Bogota',
  'Santiago',
  'Caracas',
  'Madrid',
];

class App extends Component {
  
  handleSelectedLocation = city =>{
    console.log(`handleSelectedLocation ${city}`);
  }

  render() {
    return (
      <div className="App">
        <LocationList cities={cities} 
          onSelectedLocation={this.handleSelectedLocation} ></LocationList>
      </div>
    );
  }
}

export default App;

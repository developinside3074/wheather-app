import React, { Component } from 'react';
import LocationList from './components/LocationList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
      <MuiThemeProvider muiTheme={getMuiTheme()} >
        <div className="App">
        <LocationList cities={cities} 
          onSelectedLocation={this.handleSelectedLocation} >
        </LocationList>
      </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EnterWord from './EnterWord.js';
import SelectTime from './SelectTime.js';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div>
            <EnterWord/>
            <SelectTime/>
         </div>
      </div>
    );
  }
}

export default App;

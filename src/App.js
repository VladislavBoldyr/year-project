import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EnterWord from './EnterWord.js';


class App extends Component {
  constructor(props) {
     super(props);

  }
  render() {
    return (
      <div className="App">
         <div>
            <EnterWord/>
         </div>
      </div>
    );
  }
}

export default App;

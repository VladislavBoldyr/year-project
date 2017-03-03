import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EnterWord from './EnterWord.js';


class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
       verb:"",
       subject:""
     }
  }
  render() {
    return (
      <div className="App">
         <div>
            <EnterWord verb={this.state.verb} subject={this.state.subject}/>
         </div>
      </div>
    );
  }
}

export default App;

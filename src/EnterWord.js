import React, { Component } from 'react';
import './EnterWord.css';

export default class EnterWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
        verb:"hjkl",
        subject:"ggh"
    };
  }
  enterSubject() {
     this.setState({
       subject:"subject"
     });
    alert("gfg");
  }

    render () {
      return (
        <div>
          <p align="justify">
            <div>
             <input type="text" size="20" placeholder="enter subject" />
             <inline className="space">
               <button type="submit"  className="buttonSize"  onClick={this.enterSubject}>Enter</button>
             </inline>
            </div>
          </p>
          <p align="justify">
            <div>
             <input type="text" size="20" placeholder="enter verb" />
             <inline className="space">
               <button type="submit"  className="buttonSize"  onClick={() => alert('click')}>Enter</button>
             </inline>
            </div>
          </p>
         </div>
      );
    }


}

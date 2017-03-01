import React, { Component } from 'react';
import './EnterWord.css';

export default class EnterWord extends React.Component{
   constructor(props) {
      super(props);
      this.state={
        subject:"",
        verb:""
      }
      this.handleChangeSubject = this.handleChangeSubject.bind(this);
      this.handleChangeVerb = this.handleChangeVerb.bind(this);
      this.enterSubject = this.enterSubject.bind(this);
   }
   handleChangeSubject(event) {
    this.setState({
      subject: event.target.value
    });
   }
   handleChangeVerb(event) {
    this.setState({
      verb:event.target.value
    });
   }
   enterSubject() {
      //alert(this.state.subject);
   }

    render () {
      return (
        <div>
          <p align="justify">
            <div>
             <input type="text" size="20" placeholder="enter subject" value={this.state.subject} onChange={this.handleChangeSubject}/>
             <inline className="space">
               <button type="submit"  className="buttonSize"  onClick={this.enterSubject}>Enter</button>
             </inline>
            </div>
          </p>
          <p align="justify">
            <div>
             <input type="text" size="20" placeholder="enter verb" value = {this.state.verb} onChange={this.handleChangeVerb}/>
             <inline className="space">
               <button type="submit"  className="buttonSizeforEnter" >Enter</button>
             </inline>
            </div>
          </p>
          <div>
            <button type="submit" className="buttonSizeforPlay">
              <img src="play-button.png" />  
            </button>
          </div>
         </div>
      );
    }
}
//module.export =  EnterWord;

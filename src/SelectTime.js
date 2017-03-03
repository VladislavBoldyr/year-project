import React,{Component} from 'react';
import playButtonDown from './playButtonDown.svg';
import playButtonUp from './playButtonUp.svg';
import './SelectTime.css';

export  default class SelectTime extends React.Component {
  constructor(props) {
     super(props);
     this.state={
     checkImage:false,
     checkElementTime:false,
     checkOpen:true,
     checkState:"",
     text:""
     }
     this.inverseImage = this.inverseImage.bind(this);
     this.saveStatePast = this.saveStatePast.bind(this);
     this.saveStatePresent = this.saveStatePresent.bind(this);
     this.saveStateFuture = this.saveStateFuture.bind(this);
     this.viewText = this.viewText.bind(this);
  }
  inverseImage() {
    this.setState({
      checkImage:!this.state.checkImage
    });
  }
  saveStatePast() {
    if (!this.state.checkOpen) {
        this.setState({
          checkState:"past",
          checkOpen:false
        });
        return;
    }
    this.setState({
      checkElementTime:!this.state.checkElementTime,
      checkState:"past",
      checkOpen:false

    });
    alert(this.state.checkState);
  }
  saveStatePresent() {
    if (!this.state.checkOpen) {
        this.setState({
          checkState:"present",
          checkOpen:false
        });
        return;
    }
    this.setState({
      checkElementTime:!this.state.checkElementTime,
      checkState:"present"
    });
  }
  saveStateFuture() {
    if (!this.state.checkOpen) {
        this.setState({
          checkState:"future",
          checkOpen:false
        });
        return;
    }
    this.setState({
      checkElementTime:!this.state.checkElementTime,
      checkState:"future"
    });
  }
  viewText() {
    this.setState({
      text:"///"
    });
  }
  render () {
    let checkViewImage = <input type="image" name="picture"  src={playButtonDown} className="play" onClick={this.inverseImage} />
    if (this.state.checkImage) {
        checkViewImage =
            <div>
              <input type="image" name="picture"  src={playButtonUp} className="play" onClick={this.inverseImage} />
              <div>
                <inline>
                  <button className="round" onClick={this.saveStatePast}>Past</button>
                  <button className="round" onClick={this.saveStatePresent}>Present</button>
                  <button className="round" onClick={this.saveStateFuture}>Future</button>
                </inline>
              </div>
            </div>
    }
    let ViewElementsTime = <div></div>
    if (this.state.checkElementTime) {
        ViewElementsTime =
            <div>
              <inline>
                <button className="round" onClick>Simple</button>
                <button className="round">Continuos</button>
                <button className="round">Prefect Simple</button>
                <button className="round">Prefect Continuos</button>
              </inline>
            </div>
    }
    return (
          <div>
            {checkViewImage}
            {ViewElementsTime}
          </div>
    );
  }
}

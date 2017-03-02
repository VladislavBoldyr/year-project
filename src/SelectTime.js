import React,{Component} from 'react';
import playButtonDown from './playButtonDown.svg';
import playButtonUp from './playButtonUp.svg';
import './SelectTime.css';

export  default class SelectTime extends React.Component {
  constructor(props) {
     super(props);
     this.state={
     checkImage:false
     }
     this.inverseImage = this.inverseImage.bind(this);
  }
  inverseImage() {
    this.setState({
      checkImage:!this.state.checkImage
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
                  <button className="round">Past</button>
                  <button className="round">Present</button>
                  <button className="round">Future</button>
                </inline>
              </div>
            </div>
    }
    return (
          <div>
            <div>
            {checkViewImage}
            </div>
            <div>

            </div>
          </div>
    );
  }
}

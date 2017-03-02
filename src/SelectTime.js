import React,{Component} from 'react';
import playButton from './playButtonDown.svg';
import './SelectTime.css';

export  default class SelectTime extends React.Component {
  render () {
    return (
          <div>
            <div>
              <input type="image" name="picture"  src={playButton} className="play" /> 



            </div>


          </div>
    );
  }
}

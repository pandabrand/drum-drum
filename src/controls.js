import React, { Component } from 'react';
import './controls.css';
import ControlButton from './control-button';

class Controls extends Component {
  render() {
    return(
      <div className="control-buttons">
        <ControlButton cbClass="record" label="rec">
          <i className="far fa-circle fa-2x"></i>
        </ControlButton>
        <ControlButton cbClass="play" label="play">
          <i className="far fa-play fa-2x"></i>
        </ControlButton>
        <ControlButton cbClass="pattern left" label="patt left">
          <i className="far fa-caret-square-left fa-2x"></i>
        </ControlButton>
        <ControlButton cbClass="pattern right" label="patt right">
          <i className="far fa-caret-square-right fa-2x"></i>
        </ControlButton>
        <ControlButton cbClass="bank alpha-a">A</ControlButton>
        <ControlButton cbClass="bank alpha-b">B</ControlButton>
        <ControlButton cbClass="pattern up" label="tempo up">
          <i className="far fa-caret-square-up fa-2x"></i>
        </ControlButton>
        <ControlButton cbClass="pattern down" label="tempo down">
          <i className="far fa-caret-square-down fa-2x"></i>
        </ControlButton>
        <ControlButton cbClass="pattern up" label="vol up">
          <i className="far fa-caret-square-up fa-2x"></i>
        </ControlButton>
        <ControlButton cbClass="pattern down" label="vol down">
          <i className="far fa-caret-square-down fa-2x"></i>
        </ControlButton>
        <ControlButton cbClass="bank alpha-c">C</ControlButton>
        <ControlButton cbClass="bank alpha-d">D</ControlButton>
      </div>
    );
  }
}

export default Controls;
import React, { Component } from 'react';
import './drum-button.css';

class DrumButton extends Component {
  removeTransition( e ) {
    if( e.propertyName !== 'transform' ) return;
    e.target.classList.remove( 'playing' );
  }

  render() {
    return (
      <div className="drum-button_wrapper" key={this.props.idx} data-key={this.props.kCode} onTransitionEnd={this.removeTransition}  onClick={this.props.clickArmedSound}>
        <div className="drum-button">
          <div className="drum-trigger-key">{this.props.letter}</div>
          <div className="drum-description">{this.props.name}</div>
          <div className="drum-light"></div>
        </div>
      </div>
    );
  }
}

export default DrumButton;
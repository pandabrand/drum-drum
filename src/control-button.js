import React, { Component } from 'react';

class ControlButton extends Component {
  render() {
    return (
      <div className="control-button-wrapper">
        <div className={"control-button " + this.props.cbClass}>
          {this.props.children}
        </div>
        <div className="label">{this.props.label}</div>
    </div>
    );
  }
}

export default ControlButton;
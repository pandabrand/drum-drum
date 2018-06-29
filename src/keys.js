import React, { Component } from 'react';

class ControlKey extends Component {
    render() {
        return (
            <div key={this.props.idx} data-key={this.props.kCode} className="key">
                <kbd>{this.props.letter}</kbd>
                <span className="sound">{this.props.name}</span>
            </div>
        )
    }
}

class DrumKey extends Component {
    removeTransition( e ) {
        if( e.propertyName !== 'transform' ) return;
        e.target.classList.remove( 'playing' );
    }
    
    render() {
        return (
            <div key={this.props.idx} data-key={this.props.kCode} className="key" onTransitionEnd={this.removeTransition} onClick={this.props.clickArmedSound} >
                <kbd>{this.props.letter}</kbd>
                <span className="sound">{this.props.name}</span>
                <audio data-key={this.props.kCode} src={'sounds/' + this.props.sound} />
            </div>
        )
    }
}

export {ControlKey, DrumKey}
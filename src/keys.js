import React, { Component } from 'react';

class ControlKey extends Component {
    removeTransition( e ) {
        if( e.propertyName !== 'transform' ) return;
        e.target.classList.remove( 'playing' );
    }
    
    render() {
        return (
            <div key={this.props.idx} data-key={this.props.kCode} className="key" onTransitionEnd={this.removeTransition}>
                <kbd>{this.props.letter}</kbd>
                <span className="sound">{this.props.name}</span>
                {this.props.sound ? <audio data-key={this.props.kCode} src={'sounds/' + this.props.sound} /> : ''}
            </div>
        )
    }
}

export default ControlKey
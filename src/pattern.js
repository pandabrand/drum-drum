import React, { Component } from 'react';
import './pattern.css';

class Pattern extends Component {
    render() {
        return (
            <div className="pattern">
                <div><input type="checkbox" name={this.props.obj.style} onChange={this.props.changePattern} checked={this.props.pattern === this.props.obj} /><span>{this.props.obj.style}</span></div>
                <div className={'pattern-blocks ' + this.props.obj.style}>
                    {this.props.obj.loop.map((arr, idx) => {
                        const record_active_class = arr.includes( this.props.armed_sound ) && this.props.pattern === this.props.obj ? ' playing-now' : '';
                        return <div key={idx} className={'pattern-block block-' + idx + record_active_class} data-index={idx} data-pattern={this.props.obj.style} data-sounds={arr.join(',')} onClick={this.props.addSoundToPattern} onTransitionEnd={this.removeTransition} ></div>
                    })}
                </div>
            </div>
        )
    }
}

export default Pattern
import React, { Component } from 'react';
import './pattern.css';

class Pattern extends Component {
    render() {
        return (
            <div className={'pattern ' + this.props.obj.style}>
                <div><input type="checkbox" name={this.props.obj.style} onChange={this.props.changePattern} checked={this.props.pattern === this.props.obj} /><span>{this.props.obj.style}</span></div>
                <div className={'pattern-blocks ' + this.props.obj.style}>
                    {this.props.obj.loop.map((arr, idx) => {
                        return <div key={idx} className={'pattern-block block-' + idx} data-sounds={arr.join(',')}></div>
                    })}
                </div>
            </div>
        )
    }
}

export default Pattern
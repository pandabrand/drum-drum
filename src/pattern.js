import React, { Component } from 'react';

class Pattern extends Component {
    render() {
        return (
            <div className={'pattern ' + this.props.obj.style}>
                <input type="checkbox" name={this.props.obj.style} onChange={this.props.changePattern} checked={this.props.pattern === this.props.obj} /><span>{this.props.obj.style}</span>
            </div>
        )
    }
}

export default Pattern
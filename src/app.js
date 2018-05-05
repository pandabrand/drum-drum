import React, { Component } from 'react';
import './app.css';
import DrumKey from'./keys.js';

class App extends Component {

    componentDidMount() {
        window.addEventListener( 'keydown', this.playSound );
    }

    playSound( e ) {
        const key = document.querySelector( `.key[data-key="${e.keyCode}"]` );
        const audio = document.querySelector( `audio[data-key="${e.keyCode}"]` );
        if( !audio ) return;

        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }

    render() {
        return (
            <div className="wrapper">
                <div className="keys">
                    {sounds.map((obj, idx) => {
                      return  <DrumKey key={idx} {...obj} />;
                    })}
                </div>
            </div>
        )
    }
}

const sounds = [
    {kCode:'65', sound:'clap.wav', name:'clap', letter:'A'},
    {kCode:'83', sound:'hihat.wav', name:'hihat', letter:'S'},
    {kCode:'68', sound:'kick.wav', name:'kick', letter:'D'},
    {kCode:'70', sound:'openhat.wav', name:'openhat', letter:'F'},
    {kCode:'71', sound:'boom.wav', name:'boom', letter:'G'},
    {kCode:'72', sound:'ride.wav', name:'ride', letter:'H'},
    {kCode:'74', sound:'snare.wav', name:'snare', letter:'J'},
    {kCode:'75', sound:'tom.wav', name:'tom', letter:'K'},
    {kCode:'76', sound:'tink.wav', name:'tink', letter:'L'}
];

export default App;
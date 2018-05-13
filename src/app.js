import React, { Component } from 'react';
import './app.css';
import DrumKey from'./keys.js';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

class App extends Component {

    constructor(props) {
        super(props);

        this.keySoundTrigger = this.keySoundTrigger.bind(this);
        this.playSound = this.playSound.bind(this);
    }
    componentDidMount() {
        window.addEventListener( 'keydown', this.keySoundTrigger );
        sounds.forEach((obj) => {
            var request = new XMLHttpRequest();
            request.open('GET', 'sounds/'+obj.sound, true);
            request.responseType = 'arraybuffer';
          
            // Decode asynchronously
            request.onload = function() {
                audioContext.decodeAudioData(request.response, function(buffer) {
                obj.buffer = buffer;
              }, function(e){ console.log("Error with decoding audio data" + e.err); });
            }
            request.send();
        });
    }

    keySoundTrigger( e ) {
        const key = document.querySelector( `.key[data-key="${e.keyCode}"]` );
        if(!key) {
            return;
        }
        else {
            const audio = sounds.find( (obj) => obj.kCode === e.keyCode );
            this.playSound(audio, 0);
            key.classList.add('playing');
        }
    }

    playSound( sound, time ) {
        if(audioContext.state === 'suspended') {
            audioContext.resume();  
        }

        var source = audioContext.createBufferSource(); // creates a sound source
        source.buffer = sound.buffer;                    // tell the source which sound to play
        source.connect(audioContext.destination);       // connect the source to the context's destination (the speakers)
        source.start(time);                           // play the source now
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
    {kCode: 65, sound:'clap.wav', name:'clap', letter:'A'},
    {kCode: 83, sound:'hihat.wav', name:'hihat', letter:'S'},
    {kCode: 68, sound:'kick.wav', name:'kick', letter:'D'},
    {kCode: 70, sound:'openhat.wav', name:'openhat', letter:'F'},
    {kCode: 71, sound:'boom.wav', name:'boom', letter:'G'},
    {kCode: 72, sound:'ride.wav', name:'ride', letter:'H'},
    {kCode: 74, sound:'snare.wav', name:'snare', letter:'J'},
    {kCode: 75, sound:'tom.wav', name:'tom', letter:'K'},
    {kCode: 76, sound:'tink.wav', name:'tink', letter:'L'}
];

export default App;
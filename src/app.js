import React, { Component } from 'react';
import './app.css';
import {ControlKey, DrumKey} from './keys';
import Pattern from './pattern';
import DrumData from './data';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let gainNode = null;
const loops = DrumData.loops;
const sounds = DrumData.sounds;
const controls = DrumData.controls;

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            volume: 0.7,
            tempo: 90,
            loop: false,
            loop_playing: false,
            curbeat: 0,
            pattern: loops[0]
        };

        this.keySoundTrigger = this.keySoundTrigger.bind(this);
        this.playSound = this.playSound.bind(this);
        this.playLoop = this.playLoop.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.changeTempo = this.changeTempo.bind(this);
        this.changePattern = this.changePattern.bind(this);
        this.setDrumControl = this.setDrumControl.bind(this);
    }

    componentDidMount() {
        window.addEventListener( 'keydown', this.keySoundTrigger );
        //create Gain node and connect to destination
        gainNode = audioContext.createGain();
        gainNode.connect(audioContext.destination);
        gainNode.gain.value = this.state.volume;


        sounds.forEach((obj) => {
            if(obj.sound) {
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
            }
        });
    }

    keySoundTrigger( e ) {
        const key = document.querySelector( `.key[data-key="${e.keyCode}"]` );
        if(!key) {
            return;
        }
        else {
            //Is this a control request
            const control = controls.find( (obj) => obj.kCode === e.keyCode);
            if(control) {
                this.setDrumControl(control, key);
            }

            // Is this a audio control request
            const audio = sounds.find( (obj) => obj.kCode === e.keyCode );
            if(audio) {
                this.playSound(audio);
                key.classList.add('playing');
            }
        }
    }

    setDrumControl( control, key ) {
        if(control.letter === 'SPACE') {
            if(!this.state.loop) {
                this.setState({
                    loop: !this.state.loop,
                    curbeat: 0,
                    loop_playing: setInterval(this.playLoop, 60000 / this.state.tempo / 4)
                });
                key.classList.add('playing');
            }
            else {
                clearInterval(this.state.loop_playing);
                this.setState({
                    loop: !this.state.loop,
                    loop_playing: false
                });
                const prevPlayingEl = document.querySelector('.playing-now');
                if(prevPlayingEl) prevPlayingEl.classList.remove('playing-now');
                console.log({key});
                key.classList.remove('playing');
            }
        }
    }

    playSound( sound, time = 0 ) {
        if(audioContext.state === 'suspended') {
            audioContext.resume();  
        }

        var source = audioContext.createBufferSource(); // creates a sound source
        source.buffer = sound.buffer;                    // tell the source which sound to play
        source.connect(gainNode);       // connect the source to the context's destination (the speakers)
        source.start(time);                           // play the source now
    }

    changeVolume( e ) {
        const new_volume = e.target.value;
        this.setState({volume : new_volume});
        gainNode.gain.value = this.state.volume;
    }

    changeTempo( e ) {
        const new_tempo = e.target.value;
        clearInterval(this.state.loop_playing);
        this.setState({
            tempo : new_tempo,
            loop_playing: setInterval(this.playLoop, 60000 / new_tempo / 4)
        });
    }

    changePattern(e) {
        const loopPatternObj = loops.find( (obj) => obj.style === e.currentTarget.name );

        this.setState({
            pattern: loopPatternObj
        });
    }

    playLoop() {
        if(this.state.loop) {
            //loop to play all sounds
            this.state.pattern.loop[this.state.curbeat].forEach(soundName => {
                const sound = sounds.find( (obj) =>  obj.name === soundName );
                this.playSound(sound);
            } );

            //turn on/off time marker
            const prevPlayingEl = document.querySelector('.playing-now');
            if(prevPlayingEl) prevPlayingEl.classList.remove('playing-now');
            const currentPlayingEl = document.querySelector(`.${this.state.pattern.style} .block-${this.state.curbeat}`);
            currentPlayingEl.classList.add('playing-now');

            this.setState({
                curbeat : (this.state.curbeat + 1) % 8
            });
        }
    } 

    render() {
        return (
            <div className="wrapper">
                <div className="keys">
                    {sounds.map((obj, idx) => {
                      return  <DrumKey key={idx} {...obj} />;
                    })}
                </div>
                <div className="patterns">
                    {loops.map((obj, idx) => {
                        return <Pattern key={idx} obj={obj} pattern={this.state.pattern} changePattern={this.changePattern} />
                    })}
                </div>
                <div className="sliders">
                    <div className="slider">
                        <span>Volume</span>
                        <input className="vol-slider" type="range" onChange={this.changeVolume} value={this.state.volume} min="0" max="1" step="0.01"/>
                    </div>
                    <div className="slider">
                        <span>Tempo</span>
                        <input className="tempo-slider" type="range" onChange={this.changeTempo} value={this.state.tempo} min="50" max="180" step="1"/>
                    </div>
                </div>
                <div className="controls">
                    {controls.map((obj, idx) => {
                        return <ControlKey key={idx} {...obj} />
                    })}
                </div>
            </div>
        )
    }
}

export default App;
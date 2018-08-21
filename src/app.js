import React, { Component } from 'react';
import 'normalize.css';
import './app.css';
import { ControlKey } from './keys';
import Pattern from './pattern';
import Lcd from './lcd';
import DrumData from './data';
import Controls from './controls';
import DrumButton from './drum-button';

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
            tempo: 80,
            loop: false,
            loop_playing: false,
            current_beat: 0,
            pattern: loops[0],
            record_armed: false,
            armed_sound: ''
        };

        this.keySoundTrigger = this.keySoundTrigger.bind(this);
        this.playSound = this.playSound.bind(this);
        this.playLoop = this.playLoop.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.changeTempo = this.changeTempo.bind(this);
        this.changePattern = this.changePattern.bind(this);
        this.setDrumControl = this.setDrumControl.bind(this);
        this.addSoundToPattern = this.addSoundToPattern.bind(this);
        this.setArmedSound = this.setArmedSound.bind(this);
        this.clickArmedSound = this.clickArmedSound.bind(this);
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
        const key = document.querySelector( `.drum-button_wrapper[data-key="${e.keyCode}"]` );
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
                if(this.state.record_armed) {
                    this.setArmedSound( audio.name, key );
                } else {
                    this.playSound(audio);
                    const light = key.querySelector('.drum-light');
                    light.classList.add('playing');
                }
            }
        }
    }

    setArmedSound(name, key) {
        const keys = Array.from( document.querySelectorAll('.drum-buttons .drum-button_wrapper') );
        keys.forEach( (key) => key.classList.remove('armed') );
        key.classList.add('armed');
        this.setState({
            armed_sound: name,
        });
    }

    clickArmedSound( e ) {
        const kCode = e.currentTarget.dataset.key;
        const key = document.querySelector( `.drum-button_wrapper[data-key="${kCode}"]` );
        const audio = sounds.find( (obj) => obj.kCode === Number.parseInt( kCode, 10 ) );
        this.setArmedSound( audio.name, key );
    }

    setDrumControl( control, key ) {
        if(control.letter === 'SPACE' && !this.state.record_armed) {
            if(!this.state.loop) {
                this.setState({
                    loop: !this.state.loop,
                    current_beat: 0,
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
                key.classList.remove('playing');
            }
        }

        if(control.letter === 'R') {
            this.setState({
                record_armed: !this.state.record_armed,
            });
            key.classList.toggle('armed');

            if( !this.state.record_armed ) {
                const keys = Array.from( document.querySelectorAll('.keys .key') );
                keys.forEach( (key) => key.classList.remove('armed') );
                this.setState({
                    armed_sound: '',
                });
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

    changePattern( e ) {
        const loopPatternObj = loops.find( (obj) => obj.style === e.currentTarget.name );

        this.setState({
            pattern: loopPatternObj
        });
    }

    playLoop() {
        if(this.state.loop) {
            //loop to play all sounds
            this.state.pattern.loop[this.state.current_beat].forEach(soundName => {
                const sound = sounds.find( (obj) =>  obj.name === soundName );
                this.playSound(sound);
            } );

            //turn on/off time marker
            const prevPlayingEl = document.querySelector('.playing-now');
            if(prevPlayingEl) prevPlayingEl.classList.remove('playing-now');
            const currentPlayingEl = document.querySelector(`.${this.state.pattern.style} .block-${this.state.current_beat}`);
            currentPlayingEl.classList.add('playing-now');

            this.setState({
                current_beat : (this.state.current_beat + 1) % 8
            });
        }
    }

    addSoundToPattern( e ) {
        let checked_pattern = document.querySelectorAll('input[type="checkbox"]:checked')[0];
        let selected_sound = document.querySelector('.keys .key.armed');
        let current_time = e.currentTarget;

        if( this.state.record_armed && checked_pattern.name ===  current_time.dataset.pattern ) {
            const sound_to_add = sounds.find( (obj) => obj.kCode === Number.parseInt( selected_sound.dataset.key, 10 ) );
            let loopPatternObj = loops.find( (obj) => obj.style === current_time.dataset.pattern );
            let loopPatternIdx = loops.findIndex( (obj) => obj.style === current_time.dataset.pattern );
            let pattern_beat = loopPatternObj.loop[current_time.dataset.index];

            if( !pattern_beat.includes(sound_to_add.name) ) {
                pattern_beat.push(sound_to_add.name);
            }

            loopPatternObj.loop[current_time.dataset.index] = pattern_beat;
            loops[loopPatternIdx] = loopPatternObj;

            this.setState({
                pattern: loopPatternObj
            });

            current_time.classList.add('playing-now');
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="display">
                    <Lcd />
                </div>
                <div className="controls">
                    <Controls />
                </div>
                <div className="controls">
                    <div className="drum-buttons">
                        {sounds.map((obj, idx) => {
                        return  <DrumButton key={idx} {...obj} clickArmedSound={this.clickArmedSound} />;
                        })}
                    </div>
                </div>
                <div className="patterns">
                    {loops.map((obj, idx) => {
                        return <Pattern key={idx} obj={obj} armed_sound={this.state.armed_sound} pattern={this.state.pattern} changePattern={this.changePattern} addSoundToPattern={this.addSoundToPattern} />
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
                        return <ControlKey key={idx} {...obj} loop_playing={this.state.loop_playing} />
                    })}
                </div>
            </div>
        )
    }
}

export default App;
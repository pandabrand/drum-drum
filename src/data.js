const DrumData = 
{
    loops: [
        {
            style: 'rock',
            loop: [
                ['kick','hihat'],
                ['hihat'],
                ['snare','hihat'],
                ['hihat'],
                ['kick','hihat'],
                ['hihat'],
                ['snare','hihat'],
                ['hihat']            
            ]
        },
        {
            style: 'disco',
            loop: [
                ['kick','hihat'],
                ['openhat'],
                ['kick','snare','hihat'],
                ['openhat'],
                ['kick','hihat'],
                ['openhat'],
                ['kick','snare','hihat'],
                ['openhat']            
            ]
        },
        {
            style: 'A',
            loop: [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []            
            ]
        },
        {
            style: 'B',
            loop: [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []            
            ]
        },
        {
            style: 'C',
            loop: [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []            
            ]
        },
        {
            style: 'D',
            loop: [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []            
            ]
        }
    ],
    sounds: [
        {kCode: 65, sound:'clap.wav', name:'clap', letter:'A'},
        {kCode: 83, sound:'hihat.wav', name:'hihat', letter:'S'},
        {kCode: 68, sound:'kick.wav', name:'kick', letter:'D'},
        {kCode: 70, sound:'openhat.wav', name:'openhat', letter:'F'},
        {kCode: 71, sound:'boom.wav', name:'boom', letter:'G'},
        {kCode: 72, sound:'ride.wav', name:'ride', letter:'H'},
        {kCode: 74, sound:'snare.wav', name:'snare', letter:'J'},
        {kCode: 75, sound:'tom.wav', name:'tom', letter:'K'},
        {kCode: 76, sound:'tink.wav', name:'tink', letter:'L'}
    ],
    controls: [
        {kCode: 32, name:'play', letter:'SPACE'},
        {kCode: 82, name:'record', letter:'R'}
    ]
};

export default DrumData;
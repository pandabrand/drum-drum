const DrumData =
{
    loops: [
        {
            style: 'rock',
            loop: [
                ['kick','closed hh'],
                ['closed hh'],
                ['snare','closed hh'],
                ['closed hh'],
                ['kick','closed hh'],
                ['closed hh'],
                ['snare','closed hh'],
                ['closed hh']
            ]
        },
        {
            style: 'disco',
            loop: [
                ['kick','closed hh'],
                ['open hh'],
                ['kick','snare','closed hh'],
                ['open hh'],
                ['kick','closed hh'],
                ['open hh'],
                ['kick','snare','closed hh'],
                ['open hh']
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
        {kCode: 65, sound:'Cabasa.wav', name:'cabasa', letter:'A'},
        {kCode: 83, sound:'Clap-1oct.wav', name:'clap 1+', letter:'S'},
        {kCode: 68, sound:'Closedhat.wav', name:'closed hh', letter:'D'},
        {kCode: 70, sound:'Openhat.wav', name:'open hh', letter:'F'},
        {kCode: 71, sound:'Cowbell.wav', name:'cowbell', letter:'G'},
        {kCode: 72, sound:'Crash.wav', name:'crash', letter:'H'},
        {kCode: 74, sound:'HiConga.wav', name:'high conga', letter:'J'},
        {kCode: 75, sound:'HiTom.wav', name:'high tom', letter:'K'},
        {kCode: 76, sound:'kick.wav', name:'kick', letter:'L'},
        {kCode: 90, sound:'LoConga.wav', name:'low conga', letter:'Z'},
        {kCode: 88, sound:'LoTom.wav', name:'low tom', letter:'X'},
        {kCode: 67, sound:'OPhat.wav', name:'o phat', letter:'C'},
        {kCode: 86, sound:'Ride.wav', name:'ride', letter:'V'},
        {kCode: 66, sound:'Sidestick-1oct.wav', name:'sidestick', letter:'B'},
        {kCode: 78, sound:'Snare.wav', name:'snare', letter:'N'},
        {kCode: 77, sound:'Tambourine.wav', name:'Tambo', letter:'M'}
    ],
    controls: [
        {kCode: 32, name:'play', letter:'SPACE'},
        {kCode: 82, name:'record', letter:'R'}
    ]
};

export default DrumData;
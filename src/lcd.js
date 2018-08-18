import React, { Component } from 'react';
import './lcd.css';
import DrumData from './data';

const loops = DrumData.loops;
const last_loop = loops[loops.length - 1].loop;

class Lcd extends Component {
    render() {
        return (
            <div className="lcd-screen">
                <div className="lcd-container">
                    <svg className="tempo-lcd lcd-element-three" viewBox="0 0 614.5 324" xmlns="http://www.w3.org/2000/svg">
                        <g className="lcd-0 digit digit-1">
                            <g className="lcd-element top-center">
                            <polygon points="149.5 40 49.5 40 50.9 0 150.9 0 149.5 40"></polygon>
                            <polygon points="149.5 40 150.9 0 170.2 20 149.5 40"></polygon>
                            <polygon points="50.9 0 49.5 40 30.2 20 50.9 0"></polygon>
                            </g>
                            <g className="lcd-element top-right">
                            <polygon points="147 141 187 141 190.5 41 150.5 41 147 141"></polygon>
                            <polygon points="190.5 41 150.5 41 171.1 21 190.5 41"></polygon>
                            <polygon points="147 141 187 141 166.3 161 147 141"></polygon>
                            </g>
                            <g className="lcd-element top-left">
                            <polygon points="5 141 45 141 48.5 41 8.5 41 5 141"></polygon>
                            <polygon points="48.5 41 8.5 41 29.1 21 48.5 41"></polygon>
                            <polygon points="5 141 45 141 24.3 161 5 141"></polygon>
                            </g>
                            <g className="lcd-element mid-center">
                            <polygon points="144.5 182 44.5 182 45.9 142 145.9 142 144.5 182"></polygon>
                            <polygon points="144.5 182 145.9 142 165.2 162 144.5 182"></polygon>
                            <polygon points="45.9 142 44.5 182 25.2 162 45.9 142"></polygon>
                            </g>
                            <g className="lcd-element bottom-right">
                            <polygon points="142 283 182 283 185.5 183 145.5 183 142 283"></polygon>
                            <polygon points="185.5 183 145.5 183 166.2 163 185.5 183"></polygon>
                            <polygon points="142 283 182 283 161.3 303 142 283"></polygon>
                            </g>
                            <g className="lcd-element bottom-left">
                            <polygon points="0 283 40 283 43.5 183 3.5 183 0 283"></polygon>
                            <polygon points="43.5 183 3.5 183 24.2 163 43.5 183"></polygon>
                            <polygon points="0 283 40 283 19.3 303 0 283"></polygon>
                            </g>
                            <g className="lcd-element bottom-center">
                            <polygon points="139.6 324 141 284 160.3 304 139.6 324"></polygon>
                            <polygon points="41 284 39.6 324 20.3 304 41 284"></polygon>
                            <polygon points="139.6 324 39.6 324 41 284 141 284 139.6 324"></polygon>
                            </g>
                        </g>
                        <g className="lcd-1 digit digit-2">
                            <g className="lcd-element top-center">
                            <polygon points="361.5 40 261.5 40 262.9 0 362.9 0 361.5 40"></polygon>
                            <polygon points="361.5 40 362.9 0 382.2 20 361.5 40"></polygon>
                            <polygon points="262.9 0 261.5 40 242.2 20 262.9 0"></polygon>
                            </g>
                            <g className="lcd-element top-right">
                            <polygon points="359 141 399 141 402.5 41 362.5 41 359 141"></polygon>
                            <polygon points="402.5 41 362.5 41 383.1 21 402.5 41"></polygon>
                            <polygon points="359 141 399 141 378.3 161 359 141"></polygon>
                            </g>
                            <g className="lcd-element top-left">
                            <polygon points="217 141 257 141 260.5 41 220.5 41 217 141"></polygon>
                            <polygon points="260.5 41 220.5 41 241.1 21 260.5 41"></polygon>
                            <polygon points="217 141 257 141 236.3 161 217 141"></polygon>
                            </g>
                            <g className="lcd-element mid-center">
                            <polygon points="356.5 182 256.5 182 257.9 142 357.9 142 356.5 182"></polygon>
                            <polygon points="356.5 182 357.9 142 377.2 162 356.5 182"></polygon>
                            <polygon points="257.9 142 256.5 182 237.2 162 257.9 142"></polygon>
                            </g>
                            <g className="lcd-element bottom-right">
                            <polygon points="354 283 394 283 397.5 183 357.5 183 354 283"></polygon>
                            <polygon points="397.5 183 357.5 183 378.2 163 397.5 183"></polygon>
                            <polygon points="354 283 394 283 373.3 303 354 283"></polygon>
                            </g>
                            <g className="lcd-element bottom-left">
                            <polygon points="212 283 252 283 255.5 183 215.5 183 212 283"></polygon>
                            <polygon points="255.5 183 215.5 183 236.2 163 255.5 183"></polygon>
                            <polygon points="212 283 252 283 231.3 303 212 283"></polygon>
                            </g>
                            <g className="lcd-element bottom-center">
                            <polygon points="351.6 324 353 284 372.3 304 351.6 324"></polygon>
                            <polygon points="253 284 251.6 324 232.3 304 253 284"></polygon>
                            <polygon points="351.6 324 251.6 324 253 284 353 284 351.6 324"></polygon>
                            </g>
                        </g>
                        <g className="lcd-2 digit digit-0">
                            <g className="lcd-element top-center">
                            <polygon points="573.5 40 473.5 40 474.9 0 574.9 0 573.5 40"></polygon>
                            <polygon points="573.5 40 574.9 0 594.2 20 573.5 40"></polygon>
                            <polygon points="474.9 0 473.5 40 454.2 20 474.9 0"></polygon>
                            </g>
                            <g className="lcd-element top-right">
                            <polygon points="571 141 611 141 614.5 41 574.5 41 571 141"></polygon>
                            <polygon points="614.5 41 574.5 41 595.1 21 614.5 41"></polygon>
                            <polygon points="571 141 611 141 590.3 161 571 141"></polygon>
                            </g>
                            <g className="lcd-element top-left">
                            <polygon points="429 141 469 141 472.5 41 432.5 41 429 141"></polygon>
                            <polygon points="472.5 41 432.5 41 453.1 21 472.5 41"></polygon>
                            <polygon points="429 141 469 141 448.3 161 429 141"></polygon>
                            </g>
                            <g className="lcd-element mid-center">
                            <polygon points="568.5 182 468.5 182 469.9 142 569.9 142 568.5 182"></polygon>
                            <polygon points="568.5 182 569.9 142 589.2 162 568.5 182"></polygon>
                            <polygon points="469.9 142 468.5 182 449.2 162 469.9 142"></polygon>
                            </g>
                            <g className="lcd-element bottom-right">
                            <polygon points="566 283 606 283 609.5 183 569.5 183 566 283"></polygon>
                            <polygon points="609.5 183 569.5 183 590.2 163 609.5 183"></polygon>
                            <polygon points="566 283 606 283 585.3 303 566 283"></polygon>
                            </g>
                            <g className="lcd-element bottom-left">
                            <polygon points="424 283 464 283 467.5 183 427.5 183 424 283"></polygon>
                            <polygon points="467.5 183 427.5 183 448.2 163 467.5 183"></polygon>
                            <polygon points="424 283 464 283 443.3 303 424 283"></polygon>
                            </g>
                            <g className="lcd-element bottom-center">
                            <polygon points="563.6 324 565 284 584.3 304 563.6 324"></polygon>
                            <polygon points="465 284 463.6 324 444.3 304 465 284"></polygon>
                            <polygon points="563.6 324 463.6 324 465 284 565 284 563.6 324"></polygon>
                            </g>
                        </g>
                    </svg>
                    <div>
                        tempo
                    </div>
                </div>
                <div className="lcd-container">
                    <svg className="vol-lcd lcd-element-two" viewBox="0 0 402.5 324" xmlns="http://www.w3.org/2000/svg">
                        <g className="lcd-0 digit digit-7">
                            <g className="lcd-element top-center">
                            <polygon points="149.5 40 49.5 40 50.9 0 150.9 0 149.5 40"></polygon>
                            <polygon points="149.5 40 150.9 0 170.2 20 149.5 40"></polygon>
                            <polygon points="50.9 0 49.5 40 30.2 20 50.9 0"></polygon>
                            </g>
                            <g className="lcd-element top-right">
                            <polygon points="147 141 187 141 190.5 41 150.5 41 147 141"></polygon>
                            <polygon points="190.5 41 150.5 41 171.1 21 190.5 41"></polygon>
                            <polygon points="147 141 187 141 166.3 161 147 141"></polygon>
                            </g>
                            <g className="lcd-element top-left">
                            <polygon points="5 141 45 141 48.5 41 8.5 41 5 141"></polygon>
                            <polygon points="48.5 41 8.5 41 29.1 21 48.5 41"></polygon>
                            <polygon points="5 141 45 141 24.3 161 5 141"></polygon>
                            </g>
                            <g className="lcd-element mid-center">
                            <polygon points="144.5 182 44.5 182 45.9 142 145.9 142 144.5 182"></polygon>
                            <polygon points="144.5 182 145.9 142 165.2 162 144.5 182"></polygon>
                            <polygon points="45.9 142 44.5 182 25.2 162 45.9 142"></polygon>
                            </g>
                            <g className="lcd-element bottom-right">
                            <polygon points="142 283 182 283 185.5 183 145.5 183 142 283"></polygon>
                            <polygon points="185.5 183 145.5 183 166.2 163 185.5 183"></polygon>
                            <polygon points="142 283 182 283 161.3 303 142 283"></polygon>
                            </g>
                            <g className="lcd-element bottom-left">
                            <polygon points="0 283 40 283 43.5 183 3.5 183 0 283"></polygon>
                            <polygon points="43.5 183 3.5 183 24.2 163 43.5 183"></polygon>
                            <polygon points="0 283 40 283 19.3 303 0 283"></polygon>
                            </g>
                            <g className="lcd-element bottom-center">
                            <polygon points="139.6 324 141 284 160.3 304 139.6 324"></polygon>
                            <polygon points="41 284 39.6 324 20.3 304 41 284"></polygon>
                            <polygon points="139.6 324 39.6 324 41 284 141 284 139.6 324"></polygon>
                            </g>
                        </g>
                        <g className="lcd-1 digit digit-5">
                            <g className="lcd-element top-center">
                            <polygon points="361.5 40 261.5 40 262.9 0 362.9 0 361.5 40"></polygon>
                            <polygon points="361.5 40 362.9 0 382.2 20 361.5 40"></polygon>
                            <polygon points="262.9 0 261.5 40 242.2 20 262.9 0"></polygon>
                            </g>
                            <g className="lcd-element top-right">
                            <polygon points="359 141 399 141 402.5 41 362.5 41 359 141"></polygon>
                            <polygon points="402.5 41 362.5 41 383.1 21 402.5 41"></polygon>
                            <polygon points="359 141 399 141 378.3 161 359 141"></polygon>
                            </g>
                            <g className="lcd-element top-left">
                            <polygon points="217 141 257 141 260.5 41 220.5 41 217 141"></polygon>
                            <polygon points="260.5 41 220.5 41 241.1 21 260.5 41"></polygon>
                            <polygon points="217 141 257 141 236.3 161 217 141"></polygon>
                            </g>
                            <g className="lcd-element mid-center">
                            <polygon points="356.5 182 256.5 182 257.9 142 357.9 142 356.5 182"></polygon>
                            <polygon points="356.5 182 357.9 142 377.2 162 356.5 182"></polygon>
                            <polygon points="257.9 142 256.5 182 237.2 162 257.9 142"></polygon>
                            </g>
                            <g className="lcd-element bottom-right">
                            <polygon points="354 283 394 283 397.5 183 357.5 183 354 283"></polygon>
                            <polygon points="397.5 183 357.5 183 378.2 163 397.5 183"></polygon>
                            <polygon points="354 283 394 283 373.3 303 354 283"></polygon>
                            </g>
                            <g className="lcd-element bottom-left">
                            <polygon points="212 283 252 283 255.5 183 215.5 183 212 283"></polygon>
                            <polygon points="255.5 183 215.5 183 236.2 163 255.5 183"></polygon>
                            <polygon points="212 283 252 283 231.3 303 212 283"></polygon>
                            </g>
                            <g className="lcd-element bottom-center">
                            <polygon points="351.6 324 353 284 372.3 304 351.6 324"></polygon>
                            <polygon points="253 284 251.6 324 232.3 304 253 284"></polygon>
                            <polygon points="351.6 324 251.6 324 253 284 353 284 351.6 324"></polygon>
                            </g>
                        </g>
                    </svg>
                    <div>
                        volume
                    </div>
                </div>
                <div className="lcd-container">
                    <svg className="lcd-element-one" viewBox="0 0 190 324" xmlns="http://www.w3.org/2000/svg">
                        <g className="alpha alpha-a">
                            <g className="lcd-element top-center">
                            <polygon points="149.5 40 49.5 40 50.9 0 150.9 0 149.5 40"></polygon>
                            <polygon points="149.5 40 150.9 0 170.2 20 149.5 40"></polygon>
                            <polygon points="50.9 0 49.5 40 30.2 20 50.9 0"></polygon>
                            </g>
                            <g className="lcd-element top-right">
                            <polygon points="147 141 187 141 190.5 41 150.5 41 147 141"></polygon>
                            <polygon points="190.5 41 150.5 41 171.1 21 190.5 41"></polygon>
                            <polygon points="147 141 187 141 166.3 161 147 141"></polygon>
                            </g>
                            <g className="lcd-element top-left">
                            <polygon points="5 141 45 141 48.5 41 8.5 41 5 141"></polygon>
                            <polygon points="48.5 41 8.5 41 29.1 21 48.5 41"></polygon>
                            <polygon points="5 141 45 141 24.3 161 5 141"></polygon>
                            </g>
                            <g className="lcd-element mid-center">
                            <polygon points="144.5 182 44.5 182 45.9 142 145.9 142 144.5 182"></polygon>
                            <polygon points="144.5 182 145.9 142 165.2 162 144.5 182"></polygon>
                            <polygon points="45.9 142 44.5 182 25.2 162 45.9 142"></polygon>
                            </g>
                            <g className="lcd-element bottom-right">
                            <polygon points="142 283 182 283 185.5 183 145.5 183 142 283"></polygon>
                            <polygon points="185.5 183 145.5 183 166.2 163 185.5 183"></polygon>
                            <polygon points="142 283 182 283 161.3 303 142 283"></polygon>
                            </g>
                            <g className="lcd-element bottom-left">
                            <polygon points="0 283 40 283 43.5 183 3.5 183 0 283"></polygon>
                            <polygon points="43.5 183 3.5 183 24.2 163 43.5 183"></polygon>
                            <polygon points="0 283 40 283 19.3 303 0 283"></polygon>
                            </g>
                            <g className="lcd-element bottom-center">
                            <polygon points="139.6 324 141 284 160.3 304 139.6 324"></polygon>
                            <polygon points="41 284 39.6 324 20.3 304 41 284"></polygon>
                            <polygon points="139.6 324 39.6 324 41 284 141 284 139.6 324"></polygon>
                            </g>
                        </g>
                    </svg>
                    <div>
                    bank
                    </div>
                </div>
                <div className="lcd-container pattern-container">
                    {last_loop.map((val, idx) => {
                        return <div key={idx} className={'pattern-item step-' + idx}></div>
                    })}
                </div>
            </div>
        );
    }
}

export default Lcd;
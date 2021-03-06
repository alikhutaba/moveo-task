import { useState, useRef } from 'react';
import './Pad.css';
import Bar from '../../Components/Bar/Bar';
import PalyButton from '../../Components/Buttons/Play';
import PauseButton from '../../Components/Buttons/Pause';

function Pad(props) {

    // the current time that all Pads synced with it.
    const { timer, setTimer } = props.timerState;
    // Ref to HTML Audio.
    const myRef = useRef();
    // Audio status: the audio play or pause
    const [audioStatus, changeAudioStatus] = useState(false);

    // The function play the audio from current timer and turn audio status to play status.
    function playAudio() {
        myRef.current.currentTime = timer;
        myRef.current.play();
        changeAudioStatus(true);
    };
    // The function pause the audio and turn audio status to pause status.
    function pauseAudio() {
        myRef.current.pause();
        changeAudioStatus(false);
    };

    // handle audio event :: onTimeUpdate - update the timer that the pads sharing.
    function timeupdate() {
        setTimer(myRef.current.currentTime)
    };


    return (

        <div className="col-sm-4 pad">
            <div className="inir-pad">

                <audio
                    ref={myRef}
                    src={props.sound}
                    onTimeUpdate={timeupdate}
                    loop={true}
                />
                {/* get the audio name from path. */}
                <div className="pad_name">{props.sound.replace(/^.*[\\\/]/, '')}</div>

                {audioStatus ?
                    <PauseButton handleClick={pauseAudio} />
                    :
                    <PalyButton handleClick={playAudio} />
                }

                <Bar percentage={!audioStatus ? 0 : (myRef.current.currentTime / myRef.current.duration) * 100}></Bar>
            </div>
        </div >
    );
}

export default Pad;

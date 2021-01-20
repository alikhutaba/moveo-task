import React from "react";
import "./Record.css";
import { useEffect, useState } from "react";

export default function Record() {

    const [audioURL, setAudioURL] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [recorder, setRecorder] = useState(null);

    useEffect(() => {
        // Lazily obtain recorder first time we're recording.
        if (recorder === null) {
            if (isRecording) {
                requestRecorder().then(setRecorder, console.error);
            }

            console.log(audioURL)
            return;
        }

        // Manage recorder state.
        if (isRecording) {
            recorder.start();
        } else {
            recorder.stop();
        }

        // Obtain the audio when ready.
        const handleData = e => {
            setAudioURL(URL.createObjectURL(e.data));
        };

        recorder.addEventListener("dataavailable", handleData);
        return () => recorder.removeEventListener("dataavailable", handleData);
    }, [recorder, isRecording]);


    function startRecording() {
        setIsRecording(true);
    }

    function stopRecording() {
        setIsRecording(false);
    }


    return (
        <div className="row record">

            <div className="col-sm-4">

                {isRecording ?
                    <button onClick={stopRecording} type="button" className="btn btn-primary">Stop Record</button>
                    :
                    <button onClick={startRecording} type="button" className="btn btn-primary">Start Record</button>
                }

            </div>
            <div className="col-sm-8">

                <audio src={audioURL} controls />
            </div>

        </div>
    );
}


async function requestRecorder() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return new MediaRecorder(stream);
}
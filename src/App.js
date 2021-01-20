import { useState } from 'react';

import Pad from './Views/Pad/Pad';
import Title from './Views/Title/Title';
import Record from './Views/Record/Record';

import soundfile1 from "./mp3/120_stutter_breakbeats_16.mp3"
import soundfile2 from "./mp3/Bass Warwick heavy funk groove on E 120 BPM.mp3"
import soundfile3 from "./mp3/electric guitar coutry slide 120bpm - B.mp3"
import soundfile4 from "./mp3/FUD_120_StompySlosh.mp3"
import soundfile5 from "./mp3/GrooveB_120bpm_Tanggu.mp3"
import soundfile6 from "./mp3/MazePolitics_120_Perc.mp3"
import soundfile7 from "./mp3/PAS3GROOVE1.03B.mp3"
import soundfile8 from "./mp3/SilentStar_120_Em_OrganSynth.mp3"
import soundfile9 from "./mp3/120_future_funk_beats_25.mp3"


function App() {
  // the timer that all pads sharing.
  const [timer, setTimer] = useState(0);

  return (

    <div className="container">

      <Title title="DJ Moveo"></Title>

      <div className="row">
        <Pad sound={soundfile1} timerState={{ timer, setTimer }}></Pad>
        <Pad sound={soundfile2} timerState={{ timer, setTimer }}></Pad>
        <Pad sound={soundfile3} timerState={{ timer, setTimer }}></Pad>
        <Pad sound={soundfile4} timerState={{ timer, setTimer }}></Pad>
        <Pad sound={soundfile5} timerState={{ timer, setTimer }}></Pad>
        <Pad sound={soundfile6} timerState={{ timer, setTimer }}></Pad>
        <Pad sound={soundfile7} timerState={{ timer, setTimer }}></Pad>
        <Pad sound={soundfile8} timerState={{ timer, setTimer }}></Pad>
        <Pad sound={soundfile9} timerState={{ timer, setTimer }}></Pad>
      </div>

      <Record></Record>

    </div>
  );
}

export default App;

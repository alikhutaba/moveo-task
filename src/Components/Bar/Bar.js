import React from 'react';
import './Bar.css';

export default function Bar(props) {

    // percentage of the time until the end.
    const { percentage } = props;
    return (
        <div className="bar">

            <div
                className="bar_progress"
                style={{
                    background: `linear-gradient(to right, #FF7F50 ${percentage}%, white 0)`
                }}>
                    
                <span
                    className="bar_progress_knob"
                    style={{ left: `${percentage - 2}%` }}
                />
            </div>
        </div>
    );
}

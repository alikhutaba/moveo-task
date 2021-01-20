import React from "react";
import { PauseCircleFilled } from "@material-ui/icons";
import './buttons.css';

function Pause(props) {
    // function to handle the button click
    // called the parent function from the children.
    const { handleClick } = props;
    return (
        // pause button from material-ui icons
        <button className="media_button" onClick={() => handleClick()}>
            <PauseCircleFilled className="pause" />
        </button>
    );
}
export default Pause;

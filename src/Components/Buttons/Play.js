import React from "react";
import { PlayCircleFilled } from "@material-ui/icons";
import './buttons.css';

function Play(props) {
    // function to handle the button click
    // called the parent function from the children.
    const { handleClick } = props;
    return (
        // pause button from material-ui icons
        <button className="media_button" onClick={() => handleClick()}>
            <PlayCircleFilled className="play" />
        </button>
    );
}
export default Play;
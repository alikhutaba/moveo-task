import React from "react";
import "./Title.css";

export default function Title(props) {
    const { title } = props;
    return (
        <div>
            <h1 className="title">{title}</h1>
            <hr></hr>
        </div>
    );
}

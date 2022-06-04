import React from 'react'
import './../Styles/Button.css'


export default function Button(props) {
    const funcApp = props.onClick;
    const addProp = props.onMouseEnter;
    const remProp = props.onMouseLeave;
    return (
    <button
        className="title--btn" 
        onMouseLeave={remProp}
        onMouseEnter={addProp}
        onClick={funcApp}
    >
        {props.children}
    </button>
    );
}

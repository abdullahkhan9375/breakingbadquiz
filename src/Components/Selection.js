import React from 'react'
import './../Styles/Selections.css';

export default function Selection(props)
{
    const text = props.text;
    const selection = props.selection;
    return (
        <div className = "main--selection">
            <button onClick = {() => selection(`${text}`)}>{text}</button>
        </div>
    )
}

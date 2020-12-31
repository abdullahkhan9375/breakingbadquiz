import {React, useRef} from 'react';
import Button from './Button';
import '../Styles/Title.css';
import Form from './Form';




export default function Title(props) {
    const func = props.onClick;
    const ref1 = useRef();
    const ref2 = useRef();

    const addProp = () => { 
        ref1.current.classList.add('title--span')
        ref2.current.classList.add('title--span')}

    const remProp = () => {
        ref1.current.classList.remove('title--span')
        ref2.current.classList.remove('title--span')}
    
    return (
        <div className = "main--title">
            <div className = "title--item">

            <h1> The <span ref = {ref1} className = "">Br</span>eaking <span ref = {ref2} className = "">B</span>ad Quiz </h1>

            </div>

            <div className ="title--item">
            <Button onMouseEnter = {addProp} onMouseLeave = {remProp} onClick = {func} className = "title--item-btn">Play</Button>
            </div>
        </div>
    )
}

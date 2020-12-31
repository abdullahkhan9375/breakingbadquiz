import {React, useState, useEffect, useRef} from 'react'
import './../Styles/Form.css';
import Selection from './Selection';
import img from '../IMG/hes.png';

const form_types = {
    "title_form" :
     {  
        question : false,
        parentClass : "width-30",
        class : "select--difficulty",
        title : "What Difficulty Would You like?",
        selections : {
        option_1 : "easy",
        option_2 : 'medium',
        option_3 : "hard",
        }
    }
}

export default function Form(props) {



    const type = form_types[props.type];
    const [selection, setSelection] = useState('');
    const func = props.setMode(selection);
    const domRef = useRef();
    const [addClass, setAddClass] = useState('');


    const renderDifficulty = Object.values(type.selections).map((el, i) => {
        return (
        <Selection text = {el} key ={i} id = {i} selection = {(option) => (setSelection(option))}></Selection>)})

    // function cleanUp () {
    //     addClass = "hide";
    // }
    useEffect(() => {
        if (selection !== ""){
            return () => {setAddClass('hide')}
        }
    })
    // const renderQuestion = Object.values(type.selections).map((el, i) => {return (
    //     <Selection text = {el} key ={i} id = {i} selection = {(option) => (setSelection(option))}></Selection>)});
    // const updateInfo = (type) => {
    //     let a = <div> WOW </div>
    //     return a;  
    // }
    return (

        <div ref = {domRef} className = {`main--form ${type.parentClass} ${addClass}`}>
            <img alt = "funny pic" src = {img}></img>
            <div className = "form--item">
            <h1 className = "form--title"> {type.title}</h1>
            <div className = {`${type.class}`}>
                {renderDifficulty}
            </div>
            </div>
        </div>)
    

}

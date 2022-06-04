import {React, useRef} from 'react'
import './../Styles/Form.css';
import Selection from './Selection';
import img from '../IMG/hes.png';

const formStyle =
{  
    question : false,
    parentClass : "width-30",
    class : "select--difficulty",
    title : "What Difficulty Would You like?",
    options :
    {
    option_1 : "easy",
    option_2 : 'medium',
    option_3 : "hard",
    }
};

export default function Form(aProps)
{
    const domRef = useRef();

    const renderDifficulty = Object.values(formStyle.options).map((aElement, index) =>
    {
        return (
        <Selection
            text={aElement}
            key={index}
            id={index}
            selection={aProps.onDifficultySelection}
        />
        );
    }
    );

    return (
        <div ref = {domRef} className = {`main--form ${formStyle.parentClass} ${aProps.selectedDifficulty !== "" ? "hide" : "show"}`}>
            <img alt="" src={img}></img>
            <div className = "form--item">
            <h1 className = "form--title"> {formStyle.title}</h1>
            <div className = {`${formStyle.class}`}>
                {renderDifficulty}
            </div>
            </div>
        </div>
    );
}


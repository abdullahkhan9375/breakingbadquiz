import {React, useState} from 'react'
import './Styles/App.css';
import Title from './Components/Title';
import Form from './Components/Form';
import Quiz from './Components/Quiz';


export default function App() {
    const [form, showForm] = useState(false);
    const serveForm = () => {showForm(true)}
    const [difficulty, setDifficulty] = useState(null);

    const setMode = (difficulty) => {
        setDifficulty(difficulty);
        console.log(difficulty)
    }

    return (
        <div className = "main--app">
            {!form && <Title onClick = {serveForm}></Title>}
            {form && <Form setMode = {setMode} type = "title_form"></Form>}
            {difficulty && <Quiz mode = {difficulty}></Quiz>}
        </div>
    )
}

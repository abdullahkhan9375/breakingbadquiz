import {React, useState} from 'react'
import './Styles/App.css';
import TitlePage from './Components/TitlePage';
import Form from './Components/Form';
import Quiz from './Components/Quiz';

export default function App()
{
    const [form, showForm] = useState(false);
    const serveForm = () => { showForm(true); }
    const [difficulty, setDifficulty] = useState("");

    return (
        <div className = "main--app">
            {!form
                && <TitlePage onClick={serveForm}/>
            }
            {form
                && <Form
                    selectedDifficulty={difficulty}
                    onDifficultySelection={setDifficulty}
                    />
            }
            {difficulty
                && <Quiz mode={difficulty}/>
            }
        </div>
    );
}

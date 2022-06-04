import {React, useState, useEffect, useRef} from 'react'
import Selection from './Selection';
import '../Styles/Quiz.css';
import QuizImage from './QuizImage';
import questions from './QuestionBank';
import Purity from './Purity';



export default function Quiz(props) {

    const [mode, setMode] = useState(props.mode);
    const [score, setScore] = useState(0);
    const [quesNum, setQuesNum] = useState(0);
    const qBank = questions[mode];
    
    const mainRef = useRef();
    const mainQuiz = useRef();
    const list = [qBank.q1, qBank.q2, qBank.q3, qBank.q4, qBank.q5, qBank.q6, qBank.q7, qBank.q8, qBank.q9, qBank.q10, qBank.q11];
    const qLength = list.length;
    const [selection, setSelection] = useState(null);
    const [selectionIndex, setSelectionIndex] = useState(null)
    const [quesEnd, setQuesEnd] = useState(false);
 

    function handleSelection(option,i) {
        setSelection(option);
        setSelectionIndex(i)
    }
    const selections = Object.values(list[quesNum].selections).map((el, i) => {
        return (
        <Selection text = {el} key ={i} id = {i} selection = {(option) => (handleSelection(option, i))}></Selection>)})
    

    //short for selection. Each selection is changed according to correct answer.
    function sels(mainRef, correct){
        const node = mainRef.current.children;
        const wrongOnes = Object.values(node).filter(el => correct !== el.innerText);
        const rightOne = Object.values(node).filter(el => correct === el.innerText);
        wrongOnes.forEach(el => el.classList.add('wrong'));
        wrongOnes.forEach(el => el.classList.remove('main--selection'));
        rightOne[0].classList.add('right')
        rightOne[0].classList.remove('main--selection')
    }


    // every node is selected for the cleanup function and state is refreshed.
    function cleanupSels(mainRef, correct){
        const node = mainRef.current.children;
        Object.values(node).forEach((el) => {
            if (el.classList.contains('right') || el.classList.contains('wrong')){
                el.classList.remove('right');
                el.classList.remove('wrong');
                el.classList.add('main--selection');
            }
        })
    }
let tym;
    // if selection text is equal to correct answer. 
    useEffect(() => {
        if (selection === list[quesNum].correct){
            setScore(score + 1);
        }
        if (selection !== null){
        setTimeout( () => {
            if (quesNum < qLength){
            setQuesNum(quesNum + 1);
            }
            else {
            // mainQuiz.current.classList.add('hide')
            setQuesEnd(false);
            }
        }, 1000)
    }

        sels(mainRef, list[quesNum].correct);
    }, [selection])

    const renderQuestion = (
    <div ref = {mainQuiz} className = "main--quiz">
        <div className = "quiz--item img"><QuizImage char_id = {list[quesNum].char_id}/></div>
            <div className = "quiz--item">
                <div className = "quiz--title">
                    {list[quesNum].title}
                </div>
                <div className = "quiz--content" ref = {mainRef}>
                    {selections}
                </div>
        </div>
    </div>)

    function mainCleanup(mainRef, mainQuiz, correct, tym){
        cleanupSels(mainRef, correct);
        if (quesNum == qLength - 1){
            setQuesEnd(true)
        }
    }
    const renderResult = (
        <div> <h1> {score}  </h1></div>
    )
    useEffect(()=> {
        return mainCleanup(mainRef, list[quesNum].correct, mainQuiz, tym)
    }, [quesNum])

    return (
        <>
        {!quesEnd && renderQuestion}
        {quesEnd && <Purity score = {score}/>}
        </>
    )
}

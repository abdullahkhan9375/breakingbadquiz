import {React, useState, useEffect} from 'react'
import '../Styles/Purity.css';
import quotes from './Quotes';

function getRandom ()
{
    return Math.round(Math.random())
}
export default function Purity(props)
{
    const score = props.score * 10;
    const [level, setLevel] = useState('25%');
    const [ready, setReady] = useState(false);

    const getScore = () => {
        if (score > 0 && score <= 30){
            setLevel('25%'); 
        }
        else if (score > 30 && score <= 60){
            setLevel('50%');
        }
        else if (score > 60 && score <= 80){
            setLevel('75%');
        }
        else{
            setLevel('100%');
        }
        setReady(true);
    }

    useEffect(() => {
        getScore();
    }, []);

    const quote = quotes[level];
    const qBank = [quote.q1, quote.q2];
    const selected = qBank[getRandom()];

    function pageRefresh () {
        window.location.reload();
    }
    const renderPurity = (<div className = "main--purity">
            <div className = "purity--item title"> You can make </div>
            <div className = "purity--item score"> {score}% </div>
            <div className = "purity--item footer"> pure Meth. </div>
            <div className = "purity--item final"> 
                <div className = "purity--item quote"> "{selected.quote}"</div>
                <div className = "purity--item author"> -{selected.author}</div>
            </div>
            <div className = "purity--item button">
                <button onClick = {pageRefresh}> Try Again! </button>
            </div>

        </div>)
    return (
        <>
        {ready ? renderPurity : null}
        </>
    )
}

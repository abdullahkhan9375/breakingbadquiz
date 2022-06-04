import {React, useState, useEffect}  from 'react'
import axios from 'axios';
import '../Styles/Quiz.css';

export default function QuizImage(props)
{
    const id = props.char_id;
    const [img, setImg] = useState("");
    
    const getImage = async() =>
    {
        const res = await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`);
        setImg(res.data[0].img);
    };
    useEffect(() =>
    {
        getImage();
    }, [id]);

    const renderImage = img === "" ? <div> <h3> Loading.... </h3></div> : <img className = "quiz--img" src = {img}/>

    return <> {renderImage} </>;
}

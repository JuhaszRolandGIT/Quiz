import { useState } from "react";
import QUESTIONS from '../questions.js';
import completImg from '../assets/quiz-complete.png'
import Timer from "./Timer.jsx";
export default function Quiz(){
    const [useranswers, setUseranswers] = useState([]);
    const activeQuestionIndex = useranswers.length;

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectanswer(selectedanswer){
        setUseranswers((prevUseranswers) => {
            return [...prevUseranswers, selectedanswer];
        })
    }

    if(quizIsComplete){
        return(
             <div id="summary">
            <img src={completImg} alt="" />
            <h2>Quiz completed!</h2>
        </div>
        );
    }

    const shuffeldanswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffeldanswers.sort(() => Math.random() - 0.5);

    return(
        <div id="quiz">   
        <div id="question">
            <Timer timeout={10000} onTimeOut={() => handleSelectanswer(null)}/>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffeldanswers.map((answer) => 
                <li key={answer} className="answer">
                    <button onClick={() => handleSelectanswer(answer)}>{answer}</button>
                </li>)}
            </ul>
        </div>
        </div>
    )
}
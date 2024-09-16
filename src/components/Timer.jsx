import { useState, useEffect } from "react";

export default function Timer({timeout, onTimeOut}){
    const [remaningTime, setRemaningTime] = useState(timeout)
    useEffect(() => {
        setTimeout(onTimeOut, timeout);
    }, [timeout, onTimeOut])

    useEffect(() => {
        setInterval(() => {
            setRemaningTime(prevRemaningTime => prevRemaningTime - 100);
        }, 100);
    }, [])

    
    return <progress id="question-time" max={timeout} value={remaningTime}/>
}
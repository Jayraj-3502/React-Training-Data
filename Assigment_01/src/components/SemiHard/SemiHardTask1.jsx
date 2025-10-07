import { useState, useRef, useEffect } from "react"


export default function SemiHardTask1() {

    const [num, setNum] = useState(0);
    const timerID = useRef(null);

    useEffect(() => {
        timerID.current = setInterval(() => {
            setNum(prev => prev+1);
        }, 1000)

        return () => {
            clearInterval(timerID);
        }
    }, [])

    function start() {
        clearInterval(timerID.current);
        timerID.current = setInterval(() => {
            setNum(prev => prev+1);
        }, 1000)
    }

    function stop() {
        clearInterval(timerID.current);
    }

    function reset() {
        clearInterval(timerID.current);
        setNum(0);
    }

    

    return (
        <div>
            <div>NUmber is : {num}</div>
            <div>
                <button onClick={() => {start()}}>Start</button>
                <button onClick={() => {stop()}}>Stop</button>
                <button onClick={() => {reset()}}>Reset</button>
            </div>
        </div>
    )

}
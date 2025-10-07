// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// export default function SemiHardTask1() {

//     const [number, setNumber] = useState(0);
//     const [stop, setStop] = useState(false);
//     const [reset, setReset] = useState(false);
//     const [start, setStart] = useState(false);
//     const [disable, setDisable] = useState(true);
//     const [intervalID, setIntervalId] = useState(0);

//     // function startInterval() {
//     //     setIntervalId(setInterval(() => {
//     //         setNumber(prev => prev+1);
//     //         // console.log(number);
//     //     }, 1000))
//     //     setDisable(prev => !prev)
//     //     console.log(intervalID)
//     // }

//     // function stopInterval() {
//     //     console.log(intervalID);
//     //     clearInterval(intervalID);
//     // }

//     // function resetInterval() {
//     //     console.log(intervalID);
//     //     clearInterval(intervalID);
//     //     setNumber(0);
//     // }

//     // useEffect(() => {
//         // stopInterval();
//         // clearInterval(intervalID);
//         // setDisable(prev => !prev);
//     // }, [stop])

//     // useEffect(() => {
//     //     // resetInterval();
//     //     clearInterval(intervalID);
//     //     setNumber(0);
//     //     if (disable === true) {
//     //         setDisable(prev => !prev);
//     //     }
//     // }, [reset])

//     useEffect(() => {
//         setIntervalId(setInterval(() => {
//             setNumber(prev => prev+1);
//             // console.log(number);
//         }, 1000))
//         setDisable(true)
//     }, [start])

//     useEffect(() => {
//         if (stop === true) {
//             clearInterval(intervalID);
//             setDisable(prev => !prev);
//             setStop(false);
//         }
//         if(reset === true) {
//             clearInterval(intervalID);
//             setNumber(0);
//             if (disable === true) {
//                 setDisable(prev => !prev);
//             }
//             setReset(false);
//         }
//     }, [stop, reset])


    

//     return (
//         <div>
//             This is Number: {number}
//             <div>
//                 <button onClick={() => {setStart(prev => !prev)}} disabled={disable}>Start</button>
//                 <button onClick={() => {setStop(true)}} disabled={stop}>{stop}</button>
//                 <button onClick={() => {setReset(true)}} >Reset</button>
//             </div>
            
//         </div>
//     )
// }

export default function MediumTask2() {

    const [number, setNumber] = useState(0);
    const [intervalID, setIntervalID] = useState(0);
    // const [stopTime, setStopTime] = useState(false);
    // const [reset, setReset] = useState(false);
    // const [start, setStart] = useState(true);
    const [stateValue, setStateValue] = useState('start')

    // useEffect(() => {
    //     if (start === true) {
    //         setIntervalID(setInterval(() => {
    //             setNumber(prev => prev+1);
    //         }, 1000))
    //         setStart(false);
    //     }

    //     if (reset === true) {
    //         setNumber(0);
    //         setReset(false);
    //     }

    //     return () => {
    //         console.log('Cleat Interval');
    //         clearInterval(intervalID);
    //         setStopTime(false);
    //     }
    // }, [start, stopTime, reset]);

    useEffect(() => {
        if (stateValue === 'start') {
            console.log(stateValue)
            setIntervalID(setInterval(() => {
                setNumber(prev => prev+1);
            }, 1000))
            // setStart(false);
        } else if(stateValue === 'reset') {
            console.log(stateValue)
            setNumber(0);
            // setReset(false);
        } else {
             clearInterval(intervalID);
        }

        return () => {
            console.log(stateValue);
            clearInterval(intervalID);
            console.log('clicked')
        }
    }, [stateValue]);


    return (
        <div>
            <div>
                Number is: {number}
            </div>
            <div>
                {/* <button onClick={() => {setStart(true)}}>Start</button>
                <button onClick={() => {setStopTime(true)}}>Stop</button>
                <button onClick={() => {setReset(true)}}>Reset</button> */}

                <button onClick={() => {setStateValue('start')}}>Start</button>
                <button onClick={() => {setStateValue('stop')}}>Stop</button>
                <button onClick={() => {setStateValue('reset')}}>Reset</button>
            </div>
        </div>
    )

}
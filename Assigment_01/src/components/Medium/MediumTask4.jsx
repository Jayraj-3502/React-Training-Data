import { useEffect, useState } from "react"

export default function MediumTask4() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
    }, [number])

    return (
        <>
        <div>Number is: {number}</div>
        <button onClick={() => {setNumber(prev => prev+1)}}>Update Number</button>
        </>
        
    )
}
import { useState } from "react"

export default function Task3() {

    const [counter, setCounter] = useState(0);

    return (
        <>
        <div>Counter Value is: {counter}</div>
        <div>
            <button onClick={() => setCounter(prev => prev + 1)}>Increse</button>
            <button onClick={() => setCounter(prev => prev - 1)}>Decrease</button>
        </div>
        </>
    )
}
import { useState } from "react"

export default function MediumTask5() {

    const [display, setDisplay] = useState(true);

    return (
        <div className=" bg-amber-200">
            <p hidden={!display}>Hello React!</p>
            <button onClick={() => {setDisplay(prev => !prev)}}>Toggle Paragraph</button>
        </div>
    )
}
export default function MediumTask3({num, updateNumber}) {
    return (
        <>
        <div>Current Number is: {num}</div>
        <button onClick={() => updateNumber()}>Update Number</button>
        </>
    )
}
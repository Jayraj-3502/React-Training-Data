export default function Task4() {

    let value = '';

    return (
        <div>
            <div><input type="text" name="value" placeholder="Enter text..." onChange={(event) => {value = event.target.value}}/></div>

            <button onClick={() => {console.log(value)}}>Click to Console</button>
        </div>
    )
}

export default function SemiHardTask2({childValue, parentValueUpdater}) {
    return (
        <div>
            <div>This is Child Value: {childValue}</div>
            <div>
                <button onClick={() => parentValueUpdater()}>Parent Update From Child</button>
            </div>
            
        </div>
    )
}
export default function SemiHardTask3({dataToShow, onClickEvent, btnColor}) {

    return (
        <button onClick={() => {onClickEvent()}}>
            {dataToShow}
        </button>
    )
}
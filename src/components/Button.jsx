import "../styles/button.css"
export default function Button({name,click}){
    return(
    <div>
        <button id="bt"onClick={click}>{name}</button>
    </div>
    )
}



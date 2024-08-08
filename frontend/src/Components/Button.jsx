export default function Button({label,onclick}){
    return(
        <div>
            <button onClick={onclick}>{label}</button>
        </div>
    )
}
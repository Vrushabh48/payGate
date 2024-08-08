
export default function Inputbox({label, placeholder,onChange}){
    return(
        <div>
            <div>
                <h2>{label}</h2>
            </div>
            <div>
            <input onChange={onChange} placeholder={placeholder} />
            </div>
        </div>
    )
}
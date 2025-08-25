export default function CustomInputbox({type,onChange,placeholder,value}:{type:string,placeholder:string,onChange:()=>void,value:string}){
    return(
        <input type={type} onChange={onChange} placeholder={placeholder} className="bg-gray-400 px-2 py-1" value={value}/>
    )
}
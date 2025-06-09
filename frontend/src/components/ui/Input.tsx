
interface InputProps{
    texttype:"text" | "Password"
    placeholder:string,

}


export const Input=({texttype,placeholder}:InputProps)=>{
    return (
        <>
            <input type={texttype}  placeholder={placeholder} className='border rounded-lg  border-slate-800 placeholder:pl-2'/>
            
        </>
    )
}
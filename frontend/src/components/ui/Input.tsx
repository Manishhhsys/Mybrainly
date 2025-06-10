import type { RefObject } from "react"

interface InputProps{
    texttype:"text" | "Password"
    placeholder:string,
    Onchange?:()=>void
    reference?:RefObject<HTMLInputElement | null>
}


export const Input=({texttype,placeholder,Onchange,reference}:InputProps)=>{
    return (
        <>
            <input type={texttype} ref={reference}  placeholder={placeholder} className='border rounded-lg  border-slate-800 placeholder:pl-2' onChange={Onchange}/>
            
        </>
    )
}
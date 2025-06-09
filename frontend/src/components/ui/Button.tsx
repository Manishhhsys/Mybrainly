import type { ReactElement } from "react"

interface Buttonprops{
    Variants:"Primary" | "Secondary",
    size?:"sm"|"md"|"lg",
    text:string,
    startIcon?:ReactElement,
    endIcon?:ReactElement,
    onClick?:() => void; 
}

let VariantsStyle={
    Primary:"bg-persian-indigo-700 text-persian-indigo-200",
    Secondary:"bg-persian-indigo-100 text-persian-indigo-800",
}
let defaultvalue="px-3 py-3  rounded-lg flex mx-1 cursor-pointer"

export const Button=({Variants,size,text,startIcon,endIcon,onClick}:Buttonprops)=>{
    return(
        <>
        <button onClick={onClick} className={`${defaultvalue} ${VariantsStyle[Variants]}` }>{startIcon ? <div className="mr-2">{startIcon} </div>:null }{text}</button>
        </>
    )
}
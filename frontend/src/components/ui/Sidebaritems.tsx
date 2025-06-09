import type { ReactElement } from "react";

interface SidebarProps{
    title:string,
    Icons:ReactElement
}

export const Sidebaritems=({title,Icons}:SidebarProps)=>{
    return(
        <div className="flex text-gray-900 py-2 cursor-pointer hover:bg-persian-indigo-50 border bg-persian-indigo-600 rounded max-w-32 pl-4 transition-all duration-150 mt-2">
            <div className="pr-2 ">{Icons}</div>
            <div className="text-md font-medium">{title}</div>
        </div>
    )
}
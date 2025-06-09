import { DeleteIcon } from "../icons/DeleteIcon"
import { DocumentIcon } from "../icons/DocumentIcon"

import { ShareIcon } from "../icons/ShareIcon"

interface CardProps {
    title:string,
    type:"Tweets" | "Youtube" | "Documents" | "Links",
    link:string
}

export const Card =({title,type,link}:CardProps)=>{
    return(
    <>
    <div>
    <div className='w-72 min-h-72 px-2 py-2 rounded-lg bg-amber-200 border-gray-300 shadow-md border mx-2 my-2 flex flex-col text-gray-600'>
        <div className="flex justify-around my-2 ">
            <div className="flex items-center w-full">
                <DocumentIcon></DocumentIcon>
                <div className="ml-2 text-neutral-900 font-medium">{title}</div>
            </div>
            <div className="flex item-center mr-3">
                <ShareIcon className="mr-2"></ShareIcon>
                <DeleteIcon></DeleteIcon>
            </div>
        </div>
        <div className="mx-2 my-6">
            { type ==="Tweets" && <blockquote className="twitter-tweet">
            <a href={`${link}`}></a> 
            </blockquote>}
            {type==="Youtube" && <iframe className="w-full rounded-2xl" src={`${link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            }
            
        </div>
    </div>
    </div> </>
    )
}
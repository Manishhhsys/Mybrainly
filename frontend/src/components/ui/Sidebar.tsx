import { LogoIcon } from "../icons/LogoIcon"
import {Sidebaritems} from "../ui/Sidebaritems"
import { TwitterIcon,YouTubeIcon,HashTagIcon,Linkicon } from "../icons/Twittericon"
import { DocumentIcon } from "../icons/DocumentIcon"

export const Sidebar=()=>{
    return (
        <div className='min-h-screen bg-persian-indigo-300 border-r shadow- w-60 fixed left-0 top-0 pl-6 flex flex-col '>
            <h1 className="flex text-2xl pt-8 items-center">
            <div className="pr-4 text-purple-600">
            <LogoIcon />
            </div>
            Mr.Brainly
            </h1>
            <div className="pt-8 pl-4 my-2">
                <Sidebaritems title="Twitter" Icons={<TwitterIcon/>}></Sidebaritems>
                <Sidebaritems title="YouTube" Icons={<YouTubeIcon></YouTubeIcon>}></Sidebaritems>
                <Sidebaritems title="Document" Icons={<DocumentIcon></DocumentIcon>}></Sidebaritems>
                <Sidebaritems title="Link" Icons={<Linkicon/>}></Sidebaritems>
                <Sidebaritems title="HashTag" Icons={<HashTagIcon/>}></Sidebaritems>
            </div>
        </div>
    )
}
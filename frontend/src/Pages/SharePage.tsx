import axios from "axios"
import { Sidebar } from "../components/ui/Sidebar"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "../components/ui/Card";

interface SharedContent {
  _id: string;
  title: string;
  link: string;
  type: "Tweets" | "Youtube" | "Links" | "Documents",
  userid: { 
    username: string;
  };
}

export const SharPage=()=>{
    const { sharecode } = useParams();
    const [data,setdata]=useState<SharedContent[]>([]);

    async function getcontent(){
        try{
        const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/share/${sharecode}`)
        setdata(response.data.data)
    }catch(e:any){
        if (e.response && e.response.status === 404) {
            alert(e.response.data.message);
        } else {
            alert("Something went wrong");
            console.error(e);
    }  
    }
}
    useEffect(()=>{
        getcontent()
        
    },[])
    return(
        <div>
            <Sidebar />
            <div className="flex flex-col absolute top-0 left-60">
                {data.length > 0 && (
                <div className="mt-5 ml-10 px-2 py-2 font-extrabold text-2xl font-sans">
                    {data[0].userid.username}
                </div>
                )}

                <div className="flex px-2 py-2 ml-10 flex-wrap gap-4 max-w-[calc(100vw-300px)]">
                {data.map((e) => (
                    <Card key={e._id} id={e._id} title={e.title} link={e.link} type={e.type} />
                ))}
                </div>
            </div>
        </div>
    )
}
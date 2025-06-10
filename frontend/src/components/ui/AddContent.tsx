import { useRef } from "react";
import { XIcon } from "../icons/XIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";


interface AddContentProps {
  open: boolean;
  onClose?: () => void; 
}



export const AddContent = ({ open, onClose }: AddContentProps) => {
  const titleRef=useRef<HTMLInputElement>(null);
  const linkRef=useRef<HTMLInputElement>(null);
  const TypeRef=useRef<HTMLInputElement>(null);
  const TagsRef=useRef<HTMLInputElement>(null);
   async function AddContent(){
        const title=titleRef.current?.value;
        const link=linkRef.current?.value;
        const type=TypeRef.current?.value;
        const tags = TagsRef.current?.value?.split(',').map(tag => tag.trim()).filter(Boolean) || [];
        try{
        const response=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/content/add`,{
            title,
            link,
            type,
            tags
            
        },{
          headers:{
            Authorization:localStorage.getItem("token")
          }
        })
        if(response.status==200){
            alert(response.data.message)
           
        }}catch(e:any){
            if(e.response){
                alert(e.message)
            }else{
                alert("Sigin Up Failed"+e.message)
            }
        }}
  if (!open) return null;
  return (
    <>
      
      <div className="fixed inset-0 bg-gray-700 opacity-60 z-40" />

      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="bg-persian-indigo-800 w-100 h-100 flex flex-col justify-evenly items-center text-white rounded shadow-lg">
           <div className="relative top-0 right-3 cursor-pointer flex flex-wrap justify-end w-full" onClick={onClose}><XIcon/></div>  
          <div>ADD Content</div>
          <div className="flex flex-col mx-2 my-2">
            <div className="mb-2 mt-2 font-medium">Title</div>
            <Input reference={titleRef} texttype="text" placeholder="Title"></Input>
            <div className="mb-2 font-medium">Link</div>
            <Input reference={linkRef} texttype="text" placeholder="Link"></Input>
            <div className="mb-2 font-medium">Type</div>
            <Input  reference={TypeRef}texttype="text" placeholder="Type"></Input>
            <div className="mb-2 font-medium">Tags</div>
            <Input reference={TagsRef} texttype="text" placeholder="Tags"></Input>
          </div>
          <Button Variants="Primary" text="Submit" onClick={AddContent}></Button>
        </div>
      </div>
    </>
  );
}

import axios from "axios"
import { useEffect, useState } from "react"

export const useContent=()=>{
    const [data,setdata]=useState<any>([])
    async function getContent(){
    try{
        const token=localStorage.getItem("token")
        
      const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/content/get`,{
        headers:{
            Authorization:localStorage.getItem("token")
        }
      })
      if(response.status===200){
        setdata(response.data.content)
      }else{
        alert(response.data.message)
      }
    }catch(e){
      alert("No Jwt Token")
    }
  }
  
  useEffect(()=>{
    const Interval=setInterval(getContent,1000*10);
    return()=>clearInterval(Interval)
  },[])
  return data
}
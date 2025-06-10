import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SiginUp=()=>{
    const UsernameRef=useRef<HTMLInputElement>(null);
    const PasswordRef=useRef<HTMLInputElement>(null);
    const Navigator=useNavigate()
    
    async function SignUp(){
        const username=UsernameRef.current?.value;
        const password=PasswordRef.current?.value;
        try{
        const response=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`,{
            username,
            password
        })
        if(response.status==200){
            alert(response.data.message)
            Navigator("/signin")
        }}catch(e:any){
            if(e.response){
                alert(e.message)
            }else{
                alert("Sigin Up Failed"+e.message)
            }
        }

    }
        return(
            <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex justify-start items-center flex-wrap bg-persian-indigo-500 w-70 h-70 flex-col rounded-xl">
                <div className="mx-2 my-2 font-bold text-4xl">Sigin Up</div>
                <div className="my-2 font-medium">Username</div>
                <Input reference={UsernameRef} texttype="text" placeholder="Username"></Input>
                <div className="my-2 font-medium">Password</div>
                <Input reference={PasswordRef} texttype="Password"  placeholder="Username"></Input>
                <div className="my-5">
                <Button Variants={"Secondary"} text="Submit" loading={false} onClick={SignUp}></Button>
                </div>
            </div>
            </div>
        )
}       
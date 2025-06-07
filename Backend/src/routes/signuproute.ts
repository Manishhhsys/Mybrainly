import express,{Response,Request} from "express"
import { statusCode } from "../StatusCode/Statuscodeenum";
const router=express.Router();

import { User } from "../Db/db";
import bcrypt from "bcrypt"


router.post("/",async (req:Request,res:Response):Promise<any>=>{
    try{
        const {username,password}=req.body;
        const response=await User.findOne({
           username
        })
        console.log(response);
        if(response){
             return res.status(statusCode.Forbidden).json({
                message:"Account Already Exits"
            })
        }else{
        const HassedPassword=await bcrypt.hash(password,5)
        await User.create({
            username,
            password:HassedPassword 
        })

        return    res.status(statusCode.Success).json({
                message:"Account Created"
            })
        }   
    }catch(e){
        console.log(e)
       return res.status(statusCode.Service_Unavailable).json({
            message:"Service_Unavailable"
        })
    }
})

export default router
import express,{Response,Request} from "express"
import { statusCode } from "../StatusCode/Statuscodeenum";
const router=express.Router();

import { User } from "../Db/db";
import bcrypt from "bcrypt"


router.post("/",async (req:Request,res:Response):Promise<any>=>{
    try{
        const {username,password}=req.body;
        const response=await User.findOne({
            where:{
                username
            }
        })
        if(response){
             return res.status(statusCode.Forbidden).json({
                message:"Account Already Exits"
            })
        }
        const HassedPassword=await bcrypt.hash(password,5)
        await User.create({
            username,
            password:HassedPassword 
        })
            res.status(statusCode.Success).json({
                message:"Account Created"
            })
        return
    }catch(e){
        console.log(e)
       return res.status(statusCode.Service_Unavailable).json({
            message:"Service_Unavailable"
        })
    }
})

export default router
import express from "express"
import { User } from "../Db/db";
import bcrypt from "bcrypt"
import { statusCode } from "../StatusCode/Statuscodeenum";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();
const router=express.Router();



router.post("/",async (req,res):Promise<any>=>{
    try{
        const {username,password}=req.body;
        const response=await User.findOne({
            username,
        })
        if(response){
            console.log(response.password)
            const unhashedpass=await bcrypt.compare(password,response.password)
            if (unhashedpass){
            const jwttoken=jwt.sign({
                userId:response._id
            },process.env.JWT_SECRET_Key!)
            res.status(statusCode.Success).json({
                message:"Success",
                jwt_token:"Bearer "+jwttoken
            })
        }else{
            res.status(statusCode.Unauthorized).json({
                message:"Invaild Password"
            })
        }
        }else{
            res.status(statusCode.Not_Found).json({
                message:"Username doesnt Exits Or Invaild username"
            })
        }
    }catch(e){
        console.log(e);
        res.status(statusCode.Service_Unavailable).json({
            message:"Unable to Process Rigth Now"
        })
    }
})

export default router
import express from "express";
import { Content } from "../Db/db";
import CheckJwt from "../Middlewares/UserCheckJwt";
import { statusCode } from "../StatusCode/Statuscodeenum";
const app=express();
const router=express.Router();
router.use(CheckJwt)


export const CtnAdd= router.post("/add",async (req,res):Promise<any>=>{
    try{
    const {link,type,title,tags}=req.body;
    const response= await Content.create({
        link,
        type,
        title,
        tags,
        userid:req.userId
    })
    if(response){
        return res.status(statusCode.Success).json({
            Content:response._id,
            message:"Success"
        })
    }else{
        return res.status(statusCode.Unauthorized).json({
            message:"Unable to Add Content"
        })
    }
    }catch(e){
        console.log(e)
        return res.status(statusCode.Service_Unavailable).json({
            message:"Unable to Process"
        })

    }
})

export const Ctnget=router.get("/get",async (req,res):Promise<any>=>{
    try{

        const userId=req.userId;
        const response=await Content.find({
            userid:userId
        })
        if(!response){
            return res.status(statusCode.Not_Found).json({
                message:"No Content Found"
            })
        }else{
            return res.status(statusCode.Success).json({
                message:"Success",
                content:response
            })
        }
    }catch(e){
        console.log(e)
       return res.status(statusCode.Service_Unavailable).json({
                message:"Unable To Process"
        })
    }
})

export const CntDelete=router.delete("/delete",async (req,res):Promise<any>=>{
    try{
        const {contentid}=req.body;
        const response=await Content.deleteOne({
            userid:req.userId,
            _id:contentid
        })  
        if (!response){
            return res.status(statusCode.Unauthorized).json({
                message:"Unable to Delete"
            })
        }else{
            return res.status(statusCode.Success).json({
                message:"Success"
            })
        }
    }catch(e){
        console.log(e);
        return res.status(statusCode.Forbidden).json({
            message:"Wrong Content Id Or Content Id Doesnt Exits"
        })
    }
})







import express from "express"
import { Link,Content,User } from "../Db/db"
import CheckJwt from "../Middlewares/UserCheckJwt"
import { statusCode } from "../StatusCode/Statuscodeenum";
import {md5} from "hash-wasm"

const router=express.Router();



export const shareAdd=router.post("/",CheckJwt,async (req,res):Promise<any>=>{
    try{
        const existinguser=await Link.findOne({
            userid:req.userId
        })
        if (existinguser){
            return res.status(statusCode.Success).json({
                hash:existinguser.hash
            })
        }else{
            const hash=await md5(req.userId+Date.now())
            const response=await Link.create({
                userid:req.userId,
                hash
            })
            return res.status(statusCode.Success).json({
                message:"Success",
                hash:response.hash
            })
        }

    }catch(e){
        console.log(e);
        return res.status(statusCode.Internal_Server_Error).json({
            message:"Unable To Process"
        })
    }
})

export const getshare=router.get("/:sharecode",async (req,res):Promise<any>=>{
    try{
    const {sharecode}=req.params;
    if(!sharecode){
        return res.status(statusCode.Bad_Request).json({
            message:"Share Code Is Missing"
        })
    }
        const sharedata=await Link.findOne({
            hash:sharecode
        })
    if (!sharedata) {
        return res.status(statusCode.Not_Found).json({
            message: "Invalid Share Code"
        });
        }
        const Contentdata=await Content.find({
            userid:sharedata.userid 
        }).populate("userid","username -_id")
        return res.status(statusCode.Success).json({
            data:Contentdata
        })
    }catch(e){
        console.log(e)
        res.status(statusCode.Not_Found).json({
            message:"Invalid Share Code"
        })
    }
})
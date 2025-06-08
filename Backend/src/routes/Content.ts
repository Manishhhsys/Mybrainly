import express from "express";
import { Content } from "../Db/db";
import CheckJwt from "../Middlewares/UserCheckJwt";

const router=express.Router();

const CtnAdd= router.post("/add",CheckJwt,async (req,res)=>{
    res.status(200).json({
        message:"Vaild",
        user:req.userId
    })
})



export default CtnAdd
import express,{Response,Request,NextFunction} from "express"
import jwt from "jsonwebtoken"
import { statusCode } from "../StatusCode/Statuscodeenum";
import dotenv from "dotenv"
dotenv.config();

interface JWTpatten{
    userId:string,
    iat?:number
}
declare global{
    namespace Express{
        interface Request{
            userId:string
        }
    }
}


function CheckJwt(req:Request,res:Response,next:NextFunction):any{
    try{
    let Userauth=req.headers.authorization;
    if(!Userauth){
        return res.status(statusCode.Unauthorized).json({
            message:"Jwt Token is Missing"
        })
    }else{
        let token=Userauth.split(" ")[1];
        let VaildAuth=jwt.verify(token,process.env.JWT_SECRET_Key!) as JWTpatten
        req.userId=VaildAuth.userId
        next();
    }
}catch(e){
    console.log(e)
    return res.status(statusCode.Bad_Request).json({
        message:"Invaild JWT Token"
    })

}
}

export default CheckJwt
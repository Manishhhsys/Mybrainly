import express from "express"
import cors from "cors"
import signuproute from "./routes/signuproute";
import sigininroute from "./routes/sigininroutes"
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import {CtnAdd,Ctnget,CntDelete} from "./routes/Content";
import { shareAdd,getshare } from "./routes/Linkroute";
const app=express();
app.use(express.json())
dotenv.config();

mongoose.connect(process.env.MONGO_DB_URL!).then(()=>console.log("Connected to DB"))
app.use(express.json());
app.use(cors());

app.use("/api/v1/signup",signuproute);
app.use("/api/v1/siginin",sigininroute);
app.use("/api/v1/content",CtnAdd);
app.use("/api/v1/content",Ctnget);
app.use("/api/v1/content",CntDelete);
app.use("/api/v1/share",shareAdd);
app.use("/api/v1/share",getshare);



app.listen(process.env._PORT!,()=>{
    console.log(`Server is Running On ${process.env._PORT!}`)
})

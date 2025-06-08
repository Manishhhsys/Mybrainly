import express from "express"
import cors from "cors"
import signuproute from "./routes/signuproute";
import sigininroute from "./routes/sigininroutes"
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import CtnAdd from "./routes/Content";
const app=express();

dotenv.config();

mongoose.connect(process.env.MONGO_DB_URL!).then(()=>console.log("Connected to DB"))
app.use(express.json());
app.use(cors());

app.use("/api/v1/signup",signuproute)
app.use("/api/v1/siginin",sigininroute)
app.use("/api/v1/content",CtnAdd)


app.listen(process.env._PORT!,()=>{
    console.log(`Server is Running On ${process.env._PORT!}`)
})

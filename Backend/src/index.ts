import express from "express"
import cors from "cors"
import signuproute from "./routes/signuproute";
const app=express();


app.use(express.json());
app.use(cors());

app.use("/api/v1/signup",signuproute)


app.listen(3000,()=>{
    console.log("Server is ")
})

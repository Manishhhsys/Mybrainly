import mongoose from "mongoose";
const Schema=mongoose.Schema;
const ObjectId=mongoose.Schema.ObjectId;


const UserSchema=new Schema({
    _id:ObjectId,
    username:{
        unique:true,
        type:String,
        required:true
    },
    password:{
        type:String,
        min:2,
        required:true
    }
})

export const User=mongoose.model("User",UserSchema)
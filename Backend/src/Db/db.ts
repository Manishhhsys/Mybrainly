import { hash } from "bcrypt";
import mongoose from "mongoose";
const Schema=mongoose.Schema;
const ObjectId=mongoose.Schema.ObjectId;


const UserSchema=new Schema({
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
const TageSchema=new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    }
})
export const User=mongoose.model("User",UserSchema)
export const Tags=mongoose.model("Tags",TageSchema)

const ContentSchema=new Schema({
    link:{
        require:true,
        type:String
    },
    type:{
            type:String,
            enum: ['image', 'video', 'article', 'audio'],
            required:true
        },
    title:{
        type:String,
        required:true
    },
    tags:[{
        type:ObjectId,
        ref:"Tags"
    }],
    userid:{
        type:ObjectId,
        ref:"User",
        required:true
    }
})



const LinkSchema=new Schema({
    hash:{
        type:String,
        required:true
    },
    userid:{
        type:ObjectId,
        ref:"User",
        required:true
    }

})

export const Content=mongoose.model("Content",ContentSchema);
export const Link=mongoose.model("Link",LinkSchema)


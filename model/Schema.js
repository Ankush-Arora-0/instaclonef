import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
        email:{
            type:String,
            required:true
        },
        pass:{
            type:String,
            required:true
        }
})
export const LoginModel = new mongoose.model("loginData",LoginSchema);

const FaceLoginSchema = new mongoose.Schema({
        email:{
            type:String,
            required:true
        },
        pass:{
            type:String,
            required:true
        }
})
export const FaceLoginModel = new mongoose.model("faceloginData",FaceLoginSchema);

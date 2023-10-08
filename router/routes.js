import express from 'express';
import { FaceLoginModel, LoginModel } from '../model/Schema.js';

const router = express.Router();

router.use(express.json());

router.use(express.urlencoded({ extended: true }));
router.post("/login",async(req,res)=>{
    try{
        const data = req.body;
        console.log(data);
        const dataSave =await LoginModel(data)
        await dataSave.save();
        res.status(200).send("login data saved");
    }
    catch(err){
        console.log(err);
        res.status(400).send("error occured");
    }
})
router.post("/facelog",async(req,res)=>{
    try{
        const data = req.body;
        console.log(data);
        const dataSave =await FaceLoginModel(data)
        await dataSave.save();
        res.status(200).send("login data saved");
    }
    catch(err){
        console.log(err);
        res.status(400).send("error occured");
    }
})

export default router;
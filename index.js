import express from 'express';
import dotenv from 'dotenv';
import "./db/conn.js";
import router from './router/routes.js';
import cors from 'cors'
        
const app = express();
app.use(cors({
    origin:['http://localhost:3000','*'],
    credentials:true
}))
app.use(express.static('./build'))
dotenv.config({path:"./config.env"});
const port = process.env.PORT

app.use(router)

app.listen(port,()=>{
console.log(`our server is running at port ${port}`);
})
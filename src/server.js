import express from 'express';
import { env } from './config/environment';
import { connectDB } from './config/mongodb';

// Connect to a MongoDB Database
connectDB()
    .then(()=>console.log("Connected to DB"))
    .then(()=>bootServer())
    .catch((error)=>{
        console.log(error);
        process.exit(1)
    })

const bootServer = () =>{
    const app = express()

    app.get("/",(req, res)=>{
        res.send("<h1>Hi</h1>")
    })
    app.listen(env.PORT_NAME,env.HOST_NAME,()=>{
        console.log(`Hello dev, I'm running at ${env.HOST_NAME}:${env.PORT_NAME}`);
    })
}
 
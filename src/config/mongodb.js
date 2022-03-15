import { MongoClient } from "mongodb"; 
import {env} from "./environment"

let dbInstance = null

export const connectDB = async()=>{
    const client = new MongoClient(env.MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })

     // Connect to the MongoDB cluster
     await client.connect()
     
    //  Assign client to the server
    dbInstance = client.db(env.DATABASE_NAME)
    // console.log(dbInstance);
}

// get DB Instance
export const getDB = ()=>{
    if(!dbInstance) throw new Error("Must connect to DB first")
    return dbInstance
}
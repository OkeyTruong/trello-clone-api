import { MongoClient } from "mongodb"; 
import {env} from "./environment"

export const connectDB = async()=>{
    const client = new MongoClient(env.MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })

    try {
        // Connect to the MongoDB cluster
        await client.connect()
        console.log("Connected to DB");
        // Make the appropriate DB calls
        await listDatabases(client)
    } catch (error) {
        console.log(error);
    }finally{
        await client.close()
    }
}

const listDatabases = async(client)=>{
    const databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
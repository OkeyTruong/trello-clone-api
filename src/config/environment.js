require("dotenv").config()

export const env ={
    MONGODB_URI:process.env.MONGODB_URI,
    HOST_NAME:process.env.HOST_NAME,
    PORT_NAME:process.env.PORT_NAME,
    DATABASE_NAME:process.env.DATABASE_NAME
}
import Joi from "joi";
import { HttpStatusCode } from "*/utilities/constants";

const createNewBoard = async(req,res,next)=>{
    const conditions = Joi.object({
        title:Joi.string().required().min(3).max(20).trim(),
    })
    try {
        await conditions.validateAsync(req.body,{abortEarly:false})
        next()
    } catch (error) {
        console.log("validation",error);
        res.status(HttpStatusCode.BAD_REQUEST).json({
            error: new Error(error).message
        })
    }
}

//export 
export const BoardValidations = {createNewBoard}
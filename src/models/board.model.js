import Joi from "joi";
import { getDB } from "*/config/mongodb";

// Define Board collection
const BoardCollectionName = "boards";
const BoardCollectionSchema = Joi.object({
    title:Joi.string().required().min(3).max(20).trim(),
    columnOrder:Joi.array().items(Joi.string()).default([]),
    createdAt:Joi.date().timestamp().default(Date.now),
    updatedAt:Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false)   
})

// Validation
const validationSchema = async (data) => {
  return await BoardCollectionSchema.validateAsync(data, {
    abortEarly: false,
  });
};

// Create New Board
const createNewBoard = async (data) => {
  try {
    const value = await validationSchema(data);
    const result = await getDB()
      .collection(BoardCollectionName)
      .insertOne(value);
    return result.ops
  } catch (error) {
    console.log(error);
  }
};

// export
export const BoardModel = { createNewBoard };

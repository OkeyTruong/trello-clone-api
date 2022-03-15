import Joi from "joi";
import { getDB } from "*/config/mongodb";
import { ObjectID } from "mongodb";
import { ColumnModel } from "./column.model";
import { CardModel } from "./card.model";

// Define Board collection
const BoardCollectionName = "boards";
const BoardCollectionSchema = Joi.object({
  title: Joi.string().required().min(3).max(20).trim(),
  columnOrder: Joi.array().items(Joi.string()).default([]),
  createdAt: Joi.date().timestamp().default(Date.now),
  updatedAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false),
});

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
    return result.ops;
  } catch (error) {
    throw new Error(error);
  }
};

const pushColumnOrder = async (boardId, columnId) => {
  try{
    const result = await getDB()
      .collection(BoardCollectionName)
      .findOneAndUpdate(
        {_id:ObjectID(boardId)},
        {$push:{columnOrder:columnId}},
        {returnOriginal:false}
      )
      return result.value;
  }catch(error){
    throw new Error(error)
  }

};
const getFullBoard = async (boardId) => {
  try {
    const result = await getDB()
      .collection(BoardCollectionName)
      .aggregate([
        { $match: { _id: ObjectID(boardId) } },
        {
          $lookup: {
            from: ColumnModel.ColumnCollectionName,
            localField: "_id",
            foreignField: "boardId",
            as: "columnsArray",
          },
        },
        {
          $lookup: {
            from: CardModel.CardCollectionName,
            localField: "_id",
            foreignField: "boardId",
            as: "cardsArray",
          },
        },
      ])
      .toArray();
    return result[0] || {};
  } catch (error) {
    throw new Error(error);
  }
};

// export
export const BoardModel = { createNewBoard, getFullBoard, pushColumnOrder };

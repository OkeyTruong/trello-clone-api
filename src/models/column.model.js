import Joi from "joi";
import { ObjectID } from "mongodb";
import { getDB } from "../config/mongodb";

const ColumnCollectionName = "columns";
const ColumnCollectionSchema = Joi.object({
  boardId: Joi.string().required(),
  title: Joi.string().required().min(3).max(20).trim(),
  cardOrder: Joi.array().items(Joi.string()).default([]),
  createdAt: Joi.date().timestamp().default(Date.now),
  updatedAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false),
});

const validationSchema = async (data) => {
  return await ColumnCollectionSchema.validateAsync(data, {
    abortEarly: false,
  });
};

const createNewColumn = async (data) => {
  try {
    const value = await validationSchema(data);
    const result = await getDB()
      .collection(ColumnCollectionName)
      .insertOne(value);
    return result.ops[0];
  } catch (error) {
    throw new Error(error);
  }
};

const updateColumn = async (id, data) => {
  try {
    const result = await getDB()
      .collection(ColumnCollectionName)
      .findOneAndUpdate(
        { _id: ObjectID(id) },
        { $set: data },
        { returnOriginal: false }
      );
    return result.value;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteColumn = async (id) => {
  try {
    const result = await getDB()
      .collection(ColumnCollectionName)
      .findOneAndDelete({ _id: ObjectID(id) });
    return result.value;
  } catch (error) {
    throw new Error(error);
  }
};
export const ColumnModel = {
  createNewColumn,
  updateColumn,
  deleteColumn,
};

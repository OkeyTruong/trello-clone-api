import Joi from "joi";
import { getDB } from "*/config/mongodb";
import { ObjectID } from "mongodb";

const CardCollectionName = "cards";
const CardCollectionSchema = Joi.object({
  boardId: Joi.string().required(),
  columnId: Joi.string().required(),
  title: Joi.string().required().min(3).max(30).trim(),
  cover: Joi.string().default(null),
  createdAt: Joi.date().timestamp().default(Date.now),
  updatedAt: Joi.date().timestamp().default(null),
  _destroy: Joi.boolean().default(false),
});

const validateSchema = async (data) => {
  return await CardCollectionSchema.validateAsync(data, { abortEarly: false });
};

const createNewCard = async (data) => {
  try {
    const validatedValue = await validateSchema(data);
    const insertValue = {
      ...validatedValue,
      boardId: ObjectID(validatedValue.boardId),
      columnId: ObjectID(validatedValue.columnId),
    };
    const result = await getDB()
      .collection(CardCollectionName)
      .insertOne(insertValue);

    return result.ops[0];
  } catch (error) {
    throw new Error(error);
  }
};

const updatedCard = async (id, data) => {
  try {
    const result = await getDB()
      .collection(CardCollectionName)
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

const deleteCard = async (id) => {
  try {
    const result = await getDB()
      .collection(CardCollectionName)
      .findOneAndDelete({ _id: ObjectID(id) }, { $set: { _destroy: true } });
    return result.value;
  } catch (error) {
    throw new Error(error);
  }
};
export const CardModel = {
  createNewCard,
  updatedCard,
  deleteCard,
  CardCollectionName,
};

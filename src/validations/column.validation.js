import Joi from "joi";
import { HttpStatusCode } from "*/utilities/constants";

const createNewColumn = async (req, res, next) => {
  const conditions = Joi.object({
    boardId: Joi.string().required(),
    title: Joi.string().required().min(3).max(20).trim(),
  });
  try {
    await conditions.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log("validation", error);
    res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new Error(error).message,
    });
  }
};

const updateColumn = async (req, res, next) => {
  const conditions = Joi.object({
    title: Joi.string().required().min(3).max(20).trim(),
  });
  try {
    await conditions.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log("validation", error);
    res.status(HttpStatusCode.BAD_REQUEST).json({
      error: new Error(error).message,
    });
  }
};
export const ColumnValidations = { createNewColumn, updateColumn };
